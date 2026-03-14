// src/pages/api/generate-article.ts
// SanityのaiPromptフィールド → Gemini APIで記事自動生成 → Sanityに書き戻す
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { documentId, documentType, title, aiPrompt, token } = await request.json();

  if (!documentId || !aiPrompt) {
    return new Response(JSON.stringify({ error: 'documentId and aiPrompt required' }), { status: 400 });
  }

  const geminiKey = import.meta.env.GEMINI_API_KEY;
  if (!geminiKey) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not configured' }), { status: 500 });
  }

  // ── Geminiで記事生成 ──────────────────────
  const isWork = documentType === 'work';
  const systemPrompt = isWork
    ? `あなたはカスタムカー専門店「THREEWAYS」（岐阜県）のWebライターです。
施工事例の記事を書いてください。
- プロフェッショナルで格好いいトーン
- 技術的な説明をわかりやすく
- オーナー様の満足感を伝える
- 段落は3〜5つ、各100〜200文字
- 段落ごとに改行で区切る
- マークダウン不要、プレーンテキストで`
    : `あなたはカスタムカー専門店「THREEWAYS」（岐阜県）のWebライターです。
ブログ記事を書いてください。
- 親しみやすく専門的なトーン
- 読者に価値ある情報を提供
- 段落は3〜5つ、各100〜200文字
- 段落ごとに改行で区切る
- マークダウン不要、プレーンテキストで`;

  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\nタイトル：${title}\n\n要点メモ（箇条書き）：\n${aiPrompt}\n\n上記を元に記事本文を書いてください。`
          }]
        }],
        generationConfig: { temperature: 0.8, maxOutputTokens: 1024 }
      })
    }
  );

  if (!geminiRes.ok) {
    const err = await geminiRes.text();
    return new Response(JSON.stringify({ error: 'Gemini API error', detail: err }), { status: 500 });
  }

  const geminiData = await geminiRes.json();
  const generatedText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  // テキストをSanity portable textブロックに変換
  const paragraphs = generatedText
    .split(/\n\n+/)
    .filter((p: string) => p.trim())
    .map((p: string) => ({
      _type: 'block',
      _key: Math.random().toString(36).slice(2),
      style: 'normal',
      markDefs: [],
      children: [{
        _type: 'span',
        _key: Math.random().toString(36).slice(2),
        marks: [],
        text: p.trim()
      }]
    }));

  // ── Sanityに書き込み ──────────────────────
  const sanityToken = import.meta.env.SANITY_API_TOKEN;
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'w9q1rwod';

  const mutation = {
    mutations: [{
      patch: {
        id: documentId,
        set: { body: paragraphs }
      }
    }]
  };

  const sanityRes = await fetch(
    `https://${projectId}.api.sanity.io/v2021-10-21/data/mutate/production`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sanityToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mutation)
    }
  );

  if (!sanityRes.ok) {
    const err = await sanityRes.text();
    return new Response(JSON.stringify({ error: 'Sanity write error', detail: err }), { status: 500 });
  }

  return new Response(JSON.stringify({
    success: true,
    message: '記事を生成しSanityに書き込みました',
    preview: generatedText.slice(0, 200) + '...'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

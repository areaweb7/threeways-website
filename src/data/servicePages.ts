/** THREEWAYS サービス下層ページ（SEO・個別URL） */
export type ServicePage = {
  slug: string
  title: string
  eyebrow: string
  description: string
  heroImage: string
  intro: string
  highlights: string[]
  sections: { heading: string; paragraphs: string[] }[]
}

export const servicePages: ServicePage[] = [
  {
    slug: 'custom',
    title: 'カスタムカー製作',
    eyebrow: 'Custom Build',
    description:
      '岐阜 THREEWAYS のカスタムカー製作。エアロ・全塗装・インテリアまでオーダーメイドで。輸入車・高級車のカスタムも国家資格整備士＆専門チームがサポート。',
    heroImage: '/cars/car9.jpg',
    intro:
      '「こうしたい」を形にするのが THREEWAYS のカスタムです。エアロパーツの取り付けから、特調色の全塗装、インテリアの仕立て直しまで、一台ごとに工程を設計し、職人が仕上げます。',
    highlights: [
      'エアロ・ホイール・ローダウンなどエクステリア一式',
      '特調色・カラーチェンジを含む塗装・ラッピングとの組み合わせ',
      'G-Class、マスタング、欧州車など輸入車・スポーツカーに対応',
      '施工後もメンテナンス・板金はグループ（G-TEC）で一貫対応',
    ],
    sections: [
      {
        heading: 'ご相談の流れ',
        paragraphs: [
          'まずは LINE またはお電話でイメージやご予算をお聞かせください。現車確認のうえ、パーツ選定・塗色・工期まで具体的にお見積りいたします。',
          '納期は内容により異なりますが、工程と完了イメージを事前にすり合わせし、安心してお任せいただけるようサポートします。',
        ],
      },
    ],
  },
  {
    slug: 'paint',
    title: '全塗装・カラーチェンジ',
    eyebrow: 'Full Paint',
    description:
      '岐阜のカスタムショップ THREEWAYS による全塗装・カラーチェンジ。ソリッドからパール・特調色まで。G-TEC 技術部門と連携した高品質仕上げ。',
    heroImage: '/cars/car11.jpg',
    intro:
      'ボディ全体の色を変え、一台の世界観をまるごと作り直すのが全塗装です。市販色はもちろん、オーナー様のこだわりに応じた特調色の調合にも対応します。',
    highlights: [
      '下地処理から塗装・研磨まで工程管理を徹底',
      'パール・マット・グロスなど質感のご提案',
      'エアロ装着車両との色合わせ・パーツ塗装とのセット施工',
    ],
    sections: [
      {
        heading: '全塗装で実現できること',
        paragraphs: [
          '経年変化や小傷の多いボディを、新車のような艶と色の深さに戻すことはもちろん、ブランドカーや限定色に近い仕上げを目指すことも可能です。',
          'ラッピングと迷われる場合は、耐久性・仕上がりの質感・将来のリカラー可否など、用途に合わせて両方の選択肢をご説明します。',
        ],
      },
    ],
  },
  {
    slug: 'wrap',
    title: 'ラッピング',
    eyebrow: 'Vehicle Wrap',
    description:
      'THREEWAYS のカーラッピング。フルラッピング・部分ラッピング・カラーチェンジフィルム。岐阜で輸入車・スポーツカーのラッピングをお考えの方へ。',
    heroImage: '/cars/car6.jpg',
    intro:
      'フィルムでボディの色と質感を大きく変えるラッピングは、比較的短期間で印象を変えられる手法です。ゴールド・サテン・マットなど、大胆なコンビネーションも人気です。',
    highlights: [
      'フルラッピング・ルーフ・ミラーなど部分施工',
      'フィルムの種類に応じた耐久性・メンテナンス方法のご説明',
      '全塗装との使い分けをご提案',
    ],
    sections: [
      {
        heading: 'ラッピング後のお手入れ',
        paragraphs: [
          'フィルムの種類により洗車方法やコーティングの可否が異なります。納車時にメンテナンスのポイントをお渡しし、長く美しい状態を保てるようお手伝いします。',
        ],
      },
    ],
  },
  {
    slug: 'maintenance',
    title: '整備・メンテナンス・車検',
    eyebrow: 'Maintenance & Inspection',
    description:
      '岐阜 THREEWAYS の車検・定期点検・一般整備。国家資格整備士在籍・自社認証工場。輸入車・カスタム車のメンテナンスもご相談ください。',
    heroImage: '/cars/car8.jpg',
    intro:
      'カスタム後の車両こそ、正しいトルク管理と部品選定が重要です。THREEWAYS では、日常のオイル交換から、ブレーキ・足回り・電装まで、車両の状態に合わせたメンテナンスを行います。',
    highlights: [
      '車検・定期点検・法定整備',
      '輸入車ディーラー以外での継続メンテナンス',
      'カスタムパーツ装着車の取り回し・点検',
    ],
    sections: [
      {
        heading: '車検・ご予約について',
        paragraphs: [
          '車検時期が近づいている方は、早めにご予約いただくとスムーズです。カスタム内容によっては部品の手配に時間を要する場合がありますので、まずはお問い合わせください。',
        ],
      },
    ],
  },
  {
    slug: 'sales',
    title: '新車・中古車販売（輸入車）',
    eyebrow: 'Vehicle Sales',
    description:
      '岐阜の THREEWAYS では厳選した輸入車・スポーツカーの販売を行っています。G クラス、マスタング、テスラなど。全国納車・カスタム後納車もご相談ください。',
    heroImage: '/cars/car5.jpg',
    intro:
      '在庫車両はカーセンサー・グーネットでもご覧いただけます。店頭にない車種でも、ご希望に近い一台をお探しするご相談を承ります。納車前・納車後のカスタムもワンストップで対応可能です。',
    highlights: [
      '店頭在庫に加え、お探しの一台の仕入れ相談',
      '納車後のメンテナンス・板金・コーティングまでグループ対応',
      '口コミ評価・実績に基づく丁寧な説明',
    ],
    sections: [
      {
        heading: '在庫・価格について',
        paragraphs: [
          '最新の在庫状況・本体価格・総額は、掲載ポータルで随時更新しています。気になる車両があれば、LINE やお電話で状態確認や見学のご予約も可能です。',
        ],
      },
    ],
  },
  {
    slug: 'buyback',
    title: '中古車買取',
    eyebrow: 'Buyback',
    description:
      'THREEWAYS の中古車買取。輸入車・カスタム車・スポーツカーも査定いたします。岐阜はもちろん、お気軽にご相談ください。',
    heroImage: '/cars/car4.jpg',
    intro:
      '買取では車両の状態はもちろん、カスタムパーツや改造の内容もプラス査定の材料として正直に評価します。査定のみのご相談も歓迎です。',
    highlights: [
      '輸入車・希少車・カスタム車の査定経験',
      '査定内容・金額の理由をわかりやすく説明',
      '売却後の愛車のメンテナンスも引き続き当店で対応可能',
    ],
    sections: [
      {
        heading: '査定時にお持ちいただくもの',
        paragraphs: [
          '車検証・自賠責・リサイクル券など、お手元にある書類をご用意ください。詳細はお問い合わせ時にご案内いたします。',
        ],
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug)
}

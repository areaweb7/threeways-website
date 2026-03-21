// src/lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'w9q1rwod',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// ── クエリ ────────────────────────────────────────
// 施工事例一覧
export const worksQuery = `*[_type == "work"] | order(publishedAt desc) {
  _id, title, slug, category, tags, summary, publishedAt,
  "mainImage": mainImage.asset->url,
}`

// 施工事例詳細
export const workBySlugQuery = `*[_type == "work" && slug.current == $slug][0] {
  _id, title, slug, category, tags, summary, publishedAt, body,
  "mainImage": mainImage.asset->url,
  "images": images[].asset->url,
  vehicle, menu,
}`

// ブログ一覧
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, category, summary, publishedAt,
  "mainImage": mainImage.asset->url,
}`

// ブログ詳細（本文内画像のURLを解決）
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, category, summary, publishedAt,
  "mainImage": mainImage.asset->url,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "asset": asset->{ url }
    }
  }
}`

import { toHTML } from '@portabletext/to-html'

function escapeAttr(s: string) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

export function portableTextToHtml(blocks: unknown[] | null | undefined): string {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return ''
  return toHTML(blocks as Parameters<typeof toHTML>[0], {
    components: {
      types: {
        image: ({ value }: { value: { alt?: string; asset?: { url?: string }; url?: string } }) => {
          const url = value?.asset?.url ?? value?.url
          if (!url) return ''
          const alt = escapeAttr(value?.alt ?? '')
          return `<figure class="my-8"><img src="${escapeAttr(url)}" alt="${alt}" class="w-full rounded-lg max-h-[min(600px,70vh)] object-contain bg-[#111]" loading="lazy" /></figure>`
        },
      },
    },
  })
}

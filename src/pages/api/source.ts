export const prerender = false;

import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { join } from 'path'

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams
  const path = searchParams.get('path') // get the query `path` (eg., 'button/button.tsx')
  if (!path) {
    return new Response('Path is required', { status: 400 })
  }
  try {
    const filePath = fileURLToPath(
      new URL(`../../${path}`, import.meta.url) // TODO: why it can't use `@/${path}`?
    )
    const content = await readFile(filePath, 'utf-8')
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  } catch (err) {
    return new Response(`File not found: ${err.message}`, { status: 404 })
  }
}

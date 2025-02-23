import sb from '@stackblitz/sdk'

const fetchComponent = async (path: string) => {
  const baseUrl =
    import.meta.env.MODE === 'development' ? '/api/source?path=' : '/ui-src/'
  const res = await fetch(`${baseUrl}${path}`)
  if (!res.ok) throw new Error(`Failed to fetch ${path}`)
  return await res.text()
}

// FIXME: how to adjust package.json from different code?
//

const openIt = async () => {

  const [button, label, indexCSS] = await Promise.all([
    fetchComponent('components/ui/Button/Button.tsx'),
    fetchComponent('components/ui/Label/Label.tsx'),
    fetchComponent('index.css'),
  ])


  const demoCode = `


import { Button } from "@/components/ui/Button/Button"
import { Label } from "@/components/ui/Label/Label"

export default function Demo() {
  return (
    <div className="tw:space-y-4">
      <Label htmlFor="name">Name</Label>
      <Button variant="outline">Submit</Button>
    </div>
  )
}
`

  sb.openProject({
    files: {

      'src/index.css': indexCSS,

      'src/lib/utils.ts': `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,
      'package.json': JSON.stringify({
        name: 'react-ts-vite-demo',
        private: true,
        version: '0.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
        },
        dependencies: {
          react: 'latest',
          'react-dom': 'latest',
          "class-variance-authority": "^0.7.1",
          "tailwind-merge": "^2.6.0",
          "clsx": "^2.1.1",
          "@radix-ui/react-label": "^2.1.1",
          "@tailwindcss/vite": "^4.0.3",
          "tailwindcss": "^4.0.0",
          "tailwindcss-animate": "^1.0.7"
        },
        devDependencies: {
          vite: 'latest',
          '@vitejs/plugin-react': 'latest',
          typescript: 'latest',
          '@types/react': 'latest',
          '@types/react-dom': 'latest',
        },
      }),

      'vite.config.ts': `
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import path from 'path';
        import { fileURLToPath } from 'url';
        // import tailwind from "@tailwindcss/vite"

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        export default defineConfig({
          plugins: [
            react(),
            // tailwind()
          ],
          resolve: {
            alias: {
              '@': path.resolve(__dirname, 'src'),
            },
          },
        })
        `,

      'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Demo App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

      'src/main.tsx': `
        import '@/index.css'
        import React from 'react'
        import ReactDOM from 'react-dom/client'
        import Demo from './components/demo'

        const root = ReactDOM.createRoot(document.getElementById('root')!)
        root.render(<Demo />)`,

      'src/components/demo.tsx': demoCode,
      'src/components/ui/Button/Button.tsx': button,
      'src/components/ui/Label/Label.tsx': label,
      'tsconfig.json': JSON.stringify({
        compilerOptions: {
          jsx: 'react-jsx',
          module: 'esnext',
          target: 'esnext',
          baseUrl: '.',
          paths: {
            '@/*': ['src/*'],
          },
        },
      }),
    },
    title: 'React + TypeScript + Vite',
    description: 'Auto-running React + TypeScript app using Vite on Stackblitz',
    template: 'node', // This is fine; it's still Vite
  })

}

const OpenStackblitz = () => {
  return (
    <>
      <button onClick={openIt}>
        Open Stackblitz
      </button>
      <br />
    </>
  )
}

export default OpenStackblitz;

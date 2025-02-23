import LZString from 'lz-string'

function compressFilesToParameters({
  files,
}: {
  files: Record<string, { content: string }>
}) {
  return LZString.compressToBase64(JSON.stringify({ files }))
}

function openCodesandbox() {
  const files = {
    'package.json': {
      content: JSON.stringify({
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
        },
        devDependencies: {
          vite: 'latest',
          '@vitejs/plugin-react': 'latest',
          typescript: 'latest',
        },
      }),
    },

    'vite.config.ts': {
      content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})`,
    },

    'tsconfig.json': {
      content: JSON.stringify({
        compilerOptions: {
          jsx: 'react-jsx',
          module: 'esnext',
          target: 'esnext',
          baseUrl: './src',
          paths: {
            '@/components/*': ['components/*'],
            '@/components/ui/*': ['components/ui/*'],
          },
        },
      }),
    },

    'index.html': {
      content: `<!DOCTYPE html>
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
    },

    'src/main.tsx': {
      content: `
        import React from 'react'
        import ReactDOM from 'react-dom/client'
        import Demo from '@/components/Demo'

        const root = ReactDOM.createRoot(document.getElementById('root')!)
        root.render(<Demo />)`,
    },
    'src/components/Demo.tsx': {
      content: `
        export default function Demo() {
          return (
          <h1>Hello World</h1>
          )
        }`,
    },
    // 'src/components/Demo.tsx': {
    //   content: `
    //     import { Button } from "@/components/ui/button"
    //     import { Input } from "@/components/ui/input"
    //     import { Label } from "@/components/ui/label"

    //     export default function Demo() {
    //       return (
    //         <div className="space-y-4">
    //           <Label htmlFor="name">Name</Label>
    //           <Input id="name" defaultValue="John Doe" />
    //           <Button>Submit</Button>
    //         </div>
    //       )
    //     }`,
    // },

    //     'src/components/ui/button.tsx': {
    //       content: `export function Button({ children }: { children: React.ReactNode }) {
    //   return <button className="btn">{children}</button>
    // }`,
    //     },

    //     'src/components/ui/input.tsx': {
    //       content: `export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    //   return <input className="input" {...props} />
    // }`,
    //     },

    //     'src/components/ui/label.tsx': {
    //       content: `export function Label({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
    //   return <label htmlFor={htmlFor} className="label">{children}</label>
    // }`,
    //     },
  }

  const parameters = compressFilesToParameters({ files })

  const form = document.createElement('form')
  form.method = 'POST'
  form.target = '_blank'
  form.action = 'https://codesandbox.io/api/v1/sandboxes/define'
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = 'parameters'
  input.value = parameters
  form.appendChild(input)
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}


const parameters = LZString.compressToBase64(
  JSON.stringify({
    files: {
      'index.js': {
        content: "console.log('Hello, Devbox!');",
      },
      'package.json': {
        content: {
          name: 'my-devbox-project',
          version: '1.0.0',
          main: 'index.js',
          scripts: {
            start: 'node index.js',
          },
        },
      },
    },
    environment: 'server', // This specifies that the environment should be a Devbox
  })
);

const openDevbox = () => {

  fetch('https://codesandbox.io/api/v1/sandboxes/define', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ parameters }),
  })
    .then((response) => response.json())
    .then((data) => {
      const sandboxId = data.sandbox_id;
      const devboxUrl = `https://codesandbox.io/s/${sandboxId}`;
      console.log(`Devbox created: ${devboxUrl}`);
      // Optionally, open the Devbox in a new tab
      window.open(devboxUrl, '_blank');
    })
    .catch((error) => {
      console.error('Error creating Devbox:', error);
    });

}

export default () => {
  return (
    // <button onClick={openCodesandbox}>
    //   Open Codesandbox
    // </button>
    <button onClick={openDevbox}>
      Open Devbox
    </button>
  )
}
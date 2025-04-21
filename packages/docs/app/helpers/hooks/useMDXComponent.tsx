/**
 * WARN:
 * The code below comes from https://bitl.to/4OVM
 * with some ncessary modifications to just make it work in our project.
 */
import { getMDXComponent as getMDXComponentOriginal } from 'mdx-bundler/client'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as jsxDevRuntime from 'react/jsx-dev-runtime'
import * as jsxRuntime from 'react/jsx-runtime'

const defaultRuntime = {
  React,
  ReactDOM,
  jsx: jsxRuntime.jsx,
  jsxs: jsxRuntime.jsxs,
  jsxDEV: process.env.NODE_ENV === 'development' ? jsxDevRuntime.jsxDEV : undefined
}

/**
 * Get an MDX component from compiled MDX code
 *
 * @param code - The string of code you got from bundleMDX
 * @param globals - Any variables your MDX needs to have accessible when it runs
 * @returns A React component that renders the MDX content
 */
const getMDXComponent = (code: string, globals: Record<string, unknown> = {}) => {
  const options = {
    ...defaultRuntime,
    ...globals,
  }

  return getMDXComponentOriginal(code, options)
}

export const useMDXComponent = (code: string, globals: Record<string, unknown> = {}) => {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals])
}

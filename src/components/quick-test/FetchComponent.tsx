const fetchIt = async () => {
  const baseUrl =
    import.meta.env.MODE === 'development' ? '/api/source?path=' : '/ui-src/'
  const path = 'Button/Button.tsx'
  const res = await fetch(`${baseUrl}${path}`)
  if (!res.ok) throw new Error(`Failed to fetch ${path}`)
  const code = await res.text()
  console.log(code)
}

export default () => <button onClick={fetchIt}>Fetch Component</button>
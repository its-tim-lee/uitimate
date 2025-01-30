import { memo, useEffect, useId, useRef, useState } from "react"
import { Toggle } from "../ui/Toggle/Toggle"

export default {
  title: 'Example/Concept',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
const Child1 = memo(({ render }: { render: () => React.ReactNode }) => {
  const [s1, setS1] = useState(0)
  // This means:
  // Even use `memo`, whenever the state changes inside the component, the render will still be triggered for that component.
  useEffect(() => {
    setTimeout(() => {
      console.log('Child gonnas to be rendered due to the state change inside the Child...')
      setS1(s1 + 1)
    }, 1000)
  }, [])
  console.log('Render:Child1')
  return <div>{render()}</div>
})

// This means:
// Whenever the parent is re-rendered, the memoized child will be re-rendered if the props are changed.
const Child2 = memo(({ children }: { children: React.ReactNode }) => {
  console.log('Render:Child2')
  return <div>{children}</div>
})

const Child3 = memo(() => {
  console.log('Render:Child3')
  useEffect(() => {
    console.log('Child 3 is created')
  }, [])
  return <div>This child will be re-created</div>
})

const Child4 = () => {
  // This just verifies the behavior of `useId`, which just works like `useRef` but in different purpose
  console.log('Render: Child4')
  const id = useId()
  useEffect(() => {
    console.log('Child4 is created')
  }, [])
  return <div>content passed by render props; id = {id}</div>
}

let key = 0
// This is not considered as a component, cuz it's not used as a component.
// But notice that, whenever this get re-run, it doesn't mean the component it used will always get re-created.
const renderFn = () => {
  console.log('renderFn is called')
  key = key + 1
  useEffect(() => {
    console.log('renderFn is created')
  }, [])
  return <Child4 key={key} />
}
const Parent = () => {
  const [key, setKey] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log('Parent gonnas to be rendered due to the state change inside the Parent...')
      setKey(key + 1)
    }, 3000)
  }, [])
  console.log('Render:Parent')
  return (
    <>
      <Child1 render={renderFn} />
      <Child2>content passed by built-in `children`</Child2>
      <Child3 key={key} />
    </>
  )
}

/**
 * Using `useRef` with `useEffect` is how we can make a reactive value in an effect non-reactive.
 * In below case, we want to be able to access the latest `propA` value in an effect, instead of "reacting" to `propA`'s changes.
 */
const Variant2Child = ({ propA, propB }: { propA: number, propB: number }) => {
  const ref = useRef(propA)
  useEffect(() => {
    console.log('This effect is running due to propA change: ', propA)
    ref.current = propA
  }, [propA])
  useEffect(() => {
    console.log('This effect is running due to propB change: ', propB)
    console.log('At the same time, it can also access the latest propA value: ', ref.current)
  }, [propB])
  return <div>Child</div>
}

export const Variant1 = {
  name: 'Render Props',
  render: Parent,
};
/**
 * To read a reactive in an effect, but don't want that reactive to be a dependency of the effect.
 * The offical solution is using "Effect Event" (ie., `useEffectEvent`), but that API is still in the experimental stage.
 * So below is an alternative solution.
 */
export const Variant2 = {
  name: 'Effect Event Alternative 1',
  render: () => {
    const [propA, setPropA] = useState(0)
    const [propB, setPropB] = useState(0)
    return <>
      <Toggle pressed={false} onClick={() => setPropA(propA + 1)}>Change propA</Toggle>
      <Toggle pressed={false} onClick={() => setPropB(propB + 1)}>Change propB</Toggle>
      <Variant2Child propA={propA} propB={propB} />
    </>
  }
}
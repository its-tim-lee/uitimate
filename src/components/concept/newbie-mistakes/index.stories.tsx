import { memo, useEffect, useId, useMemo, useRef, useState } from "react"
import { Button } from "../../ui/Button/Button"
export default {
  title: "Newbie mistakes / unwanted reactive as Effect's dependencies",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

/**
 * There're times that you'd wonder that why the effect is triggered than expected.
 * Below are some of such cases.
 */
export const ProblemA = {
  name: "Problem A / objects as an Effect'sdependency",
  render: () => {
    const [count, setCount] = useState(0)
    const options = {
      b: 'b'
    }
    /**
     * The effect will be triggered due to the call on `setCount`,
     * cuz every render will make `options` a different object.
     */
    useEffect(() => {
      console.group('The effect is triggering...')
      console.log('`options`: ', options)
      console.log('`count`: ', count)
      console.groupEnd()
    }, [options])
    return <Button pressed={false} onClick={() => setCount(c => c + 1)}>Change count: {count}</Button>
  }
}

export const SolutionA1 = {
  name: "Solution A1 / objects as an Effect's dependency",
  render: () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      /**
       * Simply move `options` inside the effect
       */
      const options = {
        b: 'b'
      }
      console.group('The effect is triggering...')
      console.log('`options`: ', options)
      console.log('`count`: ', count)
      console.groupEnd()
    }, [])
    return <Button pressed={false} onClick={() => setCount(c => c + 1)}>Change count: {count}</Button>
  }
}

export const SolutionA2 = {
  name: "Solution A2 / objects as an Effect's dependency",
  render: () => {
    const [count, setCount] = useState(0)
    /**
     * Now `options` will not be a different object on each render
     */
    const options = useMemo(() => ({ b: 'b' }), [])
    useEffect(() => {
      console.group('The effect is triggering...')
      console.log('`options`: ', options)
      console.log('`count`: ', count)
      console.groupEnd()
    }, [options])
    return <Button pressed={false} onClick={() => setCount(c => c + 1)}>Change count: {count}</Button>
  }
}


import mitt from 'mitt';

const emitter = mitt<{ message: string }>();

export const ProblemB = {
  name: "Problem B / state as an Effect's dependency",
  render: () => {
    const [messages, setMessages] = useState<string[]>([])
    /**
     * Suppose that we do want to set `messages`, at the same time,
     * we don't want its change triggers the effect,
     * but in below setup, the effect will be triggered due to `messages` is the dependency.
     */
    useEffect(() => {
      const handleMessage = (m: string) => setMessages([m, ...messages]);
      console.log(messages)
      console.group('The effect is triggering...')
      console.groupEnd()
      emitter.on('message', handleMessage);
      return () => emitter.off('message', handleMessage);
    }, [messages])
    return <>
      <Button pressed={false} onClick={() => emitter.emit('message', 'hello')}>Send Message</Button>
      <h3>Stacked messages: </h3>
      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </>
  }
}

export const SolutionB = {
  name: "Solution B / state as an Effect's dependency",
  render: () => {
    const [messages, setMessages] = useState<string[]>([])
    useEffect(() => {
      /**
       * By using updater function in set function,
       * `messages` is not the dependency of the effect.
       */
      const handleMessage = (m: string) => setMessages(ms => [m, ...ms]);
      console.group('The effect is triggering...')
      console.log('`messages`: ', messages)
      console.groupEnd()
      emitter.on('message', handleMessage);
      return () => emitter.off('message', handleMessage);
    }, [])
    return <>
      <Button pressed={false} onClick={() => emitter.emit('message', 'hello')}>Send Message</Button>
      <h3>Stacked messages: </h3>
      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </>
  }
}
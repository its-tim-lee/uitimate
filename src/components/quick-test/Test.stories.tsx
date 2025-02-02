import React, { Children } from "react"
import { cn } from "@/lib/utils"
export default {
  title: 'Example/Testory',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const ChildDoesUseContext = React.memo(() => {
  console.log('Render:ChildDoesUseContext')
  const val = React.useContext(Ctx1)
  return <div>
    <h1>ChildDoesUseContext</h1>
    <p>Context Value: {val}</p>
  </div>
})

/**
 * Without memo, it'd be re-rendered every time when parent re-renders
 */
const ChildNoUseContext = React.memo(() => {
  console.log('Render:ChildNoUseContext')
  return <div className='tw:border tw:border-red-500'>
    <h1>ChildNoUseContext</h1>
    <p>Without `memo`, it'd be re-rendered every time when parent re-renders</p>
  </div>
})

/**
 * different from ChildNoUseContext, no need to use memo, as long as it doesn't change, it'd not re-render
 */
const SlotComponent = (({ ...props }) => {
  console.info('Render: Slot Component')
  return <div {...props} className={cn('child-3-inner', props.className)}>
    <h1>SlotComponent: no use context</h1>
  </div>
})

const Ctx1 = React.createContext('val1')

const App = ({ children }: { children: React.ReactNode }) => {
  const [ctx, setCtx] = React.useState('val1')
  const [nonCtx, setNonCtx] = React.useState('This is non-context value')
  console.info('Render: App')
  return <Ctx1.Provider value={ctx}>
    <button onClick={() => setCtx(ctx === 'val1' ? 'val2' : 'val1')}>👉 change</button>
    <ChildDoesUseContext />
    <ChildNoUseContext />
    {children}
    <p>{nonCtx}</p>
    <button onClick={() => setNonCtx(nonCtx === 'This is non-context value' ? 'non-context value has been changed' : 'This is non-context value')}>👉 Change Non Context Value</button>
    </Ctx1.Provider>
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <App>
        <SlotComponent className='child-3-outer'/>
      </App>
    )
  },
};
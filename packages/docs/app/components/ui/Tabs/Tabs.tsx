import { Root, List, Trigger, Content } from "@uitimate/lib-tabs"
import { tv } from 'tailwind-variants'
import { createContext, useContext, type ComponentProps } from 'react'
import { casing } from '#/helpers/utils.ts'

const TabsVariantContext = createContext<{ variant: 'pill' | 'underline' }>({ variant: 'pill' })

type TabsProps = ComponentProps<typeof Root> & { variant: 'pill' | 'underline' }
const Tabs = ({ variant, ...props }: TabsProps) => (
  <TabsVariantContext.Provider value={{ variant }}>
    <Root data-tag={casing.kebabCase(Tabs.displayName)} {...props} />
  </TabsVariantContext.Provider>
)

const tabsListVariants = tv({
  base: 'tw:has-data-[tag=tabs-trigger]:mb-3',
  variants: {
    variant: {
      pill: "tw:inline-flex tw:h-9 tw:items-center tw:justify-center tw:rounded-lg tw:bg-muted tw:p-1 tw:text-muted-foreground",
      underline: "tw:w-full tw:justify-start tw:rounded-none tw:bg-transparent tw:p-0",
    },
  },
})
type TabsListProps = ComponentProps<typeof List>
const TabsList = ({ className, ...props }: TabsListProps) => {
  const { variant } = useContext(TabsVariantContext)
  return (
    <List
      data-tag={casing.kebabCase(TabsList.displayName)}
      className={tabsListVariants({ variant, className })}
      {...props}
    />
  )
}

const tabsTriggerVariants = tv({
  variants: {
    variant: {
      pill: [
        "tw:inline-flex tw:items-center tw:justify-center tw:whitespace-nowrap tw:rounded-md tw:px-3 tw:py-1 tw:text-sm tw:font-medium tw:ring-offset-background tw:transition-all",
        "tw:focus-visible:outline-hidden tw:focus-visible:ring-2 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-2",
        "tw:disabled:pointer-events-none tw:disabled:opacity-50",
        "tw:data-[state=active]:bg-background tw:data-[state=active]:text-foreground tw:data-[state=active]:shadow"
      ],
      underline: [
        "tw:relative tw:h-9 tw:rounded-none tw:border-b-2 tw:border-b-transparent tw:bg-transparent tw:px-4 tw:text-muted-foreground tw:shadow-none tw:transition-none",
        "tw:data-[state=active]:border-b-primary tw:data-[state=active]:text-foreground tw:data-[state=active]:shadow-none"
      ]
    },
  },
})
type TabsTriggerProps = ComponentProps<typeof Trigger>
const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
  const { variant } = useContext(TabsVariantContext)
  return (
    <Trigger
      data-tag={casing.kebabCase(TabsTrigger.displayName)}
      className={tabsTriggerVariants({ variant, className })}
      {...props}
    />
  )
}

const tabsContentVariants = tv({
  base: [
    "tw:ring-offset-background",
    "tw:focus-visible:outline-hidden tw:focus-visible:ring-2 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-2"
  ]
})
type TabsContentProps = ComponentProps<typeof Content>
const TabsContent = ({ className, ...props }: TabsContentProps) => (
  <Content
    data-tag={casing.kebabCase(TabsContent.displayName)}
    className={tabsContentVariants({ className })}
    {...props}
  />
)

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

namespace Type {
  export type Tabs = TabsProps
  export type TabsList = TabsListProps
  export type TabsTrigger = TabsTriggerProps
  export type TabsContent = TabsContentProps
}

export * from "@uitimate/lib-tabs"
export {
  type Type,
  TabsVariantContext,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
}

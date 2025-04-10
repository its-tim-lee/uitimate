import { Root, List, Trigger, Content } from "@radix-ui/react-tabs"
import { tv } from 'tailwind-variants'
import React, { createContext, useContext } from 'react'
import { kebabCase } from 'lodash-es'
const TabsVariantContext = createContext<{ variant: 'pill' | 'underline' }>({ variant: 'pill' })

const Tabs = ({ variant, ...props }: TabsProps) => (
  <TabsVariantContext.Provider value={{ variant }}>
    <Root {...props} />
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
const TabsList = ({ className, ...props }: TabsListProps) => {
  const { variant } = useContext(TabsVariantContext)
  return (
    <List
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
const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
  const { variant } = useContext(TabsVariantContext)
  return (
    <Trigger
      data-tag={kebabCase(TabsTrigger.displayName)}
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
const TabsContent = ({ className, ...props }: TabsContentProps) => (
  <Content
    className={tabsContentVariants({ className })}
    {...props}
  />
)

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

type TabsProps = React.ComponentProps<typeof Root> & { variant: 'pill' | 'underline' }
type TabsListProps = React.ComponentProps<typeof List>;
type TabsTriggerProps = React.ComponentProps<typeof Trigger>;
type TabsContentProps = React.ComponentProps<typeof Content>;

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants, tabsContentVariants, type TabsProps, type TabsListProps, type TabsTriggerProps, type TabsContentProps }
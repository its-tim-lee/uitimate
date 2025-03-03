import { Root, List, Trigger, Content } from "@radix-ui/react-tabs"
import { tv } from 'tailwind-variants'
import React, { createContext, useContext } from 'react'

const TabsVariantContext = createContext<{ variant: 'pill' | 'underline' }>({ variant: 'pill' })

export const Tabs = ({ variant, ...props }: TabsProps) => (
  <TabsVariantContext.Provider value={{ variant }}>
    <Root {...props} />
  </TabsVariantContext.Provider>
)

export const tabsListVariants = tv({
  base: 'tw:mb-3',
  variants: {
    variant: {
      pill: "tw:inline-flex tw:h-9 tw:items-center tw:justify-center tw:rounded-lg tw:bg-muted tw:p-1 tw:text-muted-foreground",
      underline: "tw:w-full tw:justify-start tw:rounded-none tw:bg-transparent tw:p-0",
    },
  },
})
export const TabsList = ({ className, ...props }: TabsListProps) => {
  const { variant } = useContext(TabsVariantContext)
  return (
    <List
      className={tabsListVariants({ variant, className })}
      {...props}
    />
  )
}

export const tabsTriggerVariants = tv({
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
export const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
  const { variant } = useContext(TabsVariantContext)
  return (
    <Trigger
      className={tabsTriggerVariants({ variant, className })}
      {...props}
    />
  )
}

export const tabsContentVariants = tv({
  base: [
    "tw:ring-offset-background",
    "tw:focus-visible:outline-hidden tw:focus-visible:ring-2 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-2"
  ]
})
export const TabsContent = ({ className, ...props }: TabsContentProps) => (
  <Content
    className={tabsContentVariants({ className })}
    {...props}
  />
)

Tabs.displayName = 'Tabs'
TabsList.displayName = List.displayName
TabsTrigger.displayName = Trigger.displayName
TabsContent.displayName = Content.displayName

export type TabsProps = React.ComponentProps<typeof Root> & { variant: 'pill' | 'underline' }
export type TabsListProps = React.ComponentProps<typeof List>;
export type TabsTriggerProps = React.ComponentProps<typeof Trigger>;
export type TabsContentProps = React.ComponentProps<typeof Content>;

import { Root, List, Trigger, Content } from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = Root;

const TabsList = ({ className, ...props }: TabsListProps) => (
  <List
    className={cn(
      "tw-inline-flex tw-h-9 tw-items-center tw-justify-center tw-rounded-lg tw-bg-muted tw-p-1 tw-text-muted-foreground",
      className
    )}
    {...props}
  />
)


const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => (
  <Trigger
    className={cn(
      "tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-px-3 tw-py-1 tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow",
      className
    )}
    {...props}
  />
)


const TabsContent = ({ className, ...props }: TabsContentProps) => (
  <Content
    className={cn(
      "tw-mt-2 tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",
      className
    )}
    {...props}
  />
)

Tabs.displayName = 'Tabs'
TabsList.displayName = List.displayName
TabsTrigger.displayName = Trigger.displayName
TabsContent.displayName = Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
export interface TabsListProps extends React.ComponentProps<typeof List> {}
export interface TabsTriggerProps extends React.ComponentProps<typeof Trigger> {}
export interface TabsContentProps extends React.ComponentProps<typeof Content> {}

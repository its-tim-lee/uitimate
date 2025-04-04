import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "#/components/ui/Accordion/Accordion";
import { List, ListItem } from "#/components/ui/List/List";
import { Icon } from "#/components/ui/Icon/Icon";

export default () => {
  const items = [
    {
      value: 'build',
      trigger: 'Build',
      content: 'Build configuration and settings',
    },
    {
      value: 'run',
      trigger: 'Run',
      content: 'Runtime configuration and execution settings',
    },
    {
      value: 'analytics',
      trigger: 'Analytics',
      content: (
        <List className="tw:space-y-2">
          <ListItem className="tw:text-gray-400 tw:hover:bg-gray-800 tw:rounded-lg tw:p-2">
            <Icon icon="lucide:bar-chart-2" className="tw:size-4" />
            <span>Dashboard</span>
          </ListItem>
          <ListItem className="tw:text-gray-400 tw:hover:bg-gray-800 tw:rounded-lg tw:p-2">
            <Icon icon="lucide:clock" className="tw:size-4" />
            <span>Realtime Analytics</span>
          </ListItem>
          <ListItem className="tw:text-gray-400 tw:hover:bg-gray-800 tw:rounded-lg tw:p-2">
            <Icon icon="lucide:flag" className="tw:size-4" />
            <span>Key Events</span>
          </ListItem>
          <ListItem className="tw:text-gray-400 tw:hover:bg-gray-800 tw:rounded-lg tw:p-2">
            <Icon icon="lucide:users" className="tw:size-4" />
            <span>Audiences</span>
          </ListItem>
          <ListItem className="tw:text-gray-400 tw:hover:bg-gray-800 tw:rounded-lg tw:p-2">
            <Icon icon="lucide:settings" className="tw:size-4" />
            <span>Custom Definitions</span>
          </ListItem>
          <ListItem className="tw:text-gray-400 tw:hover:bg-gray-800 tw:rounded-lg tw:p-2">
            <Icon icon="lucide:rocket" className="tw:size-4" />
            <span>Latest Release</span>
          </ListItem>
          <ListItem className="tw:text-gray-400 tw:hover:bg-gray-800 tw:rounded-lg tw:p-2">
            <Icon icon="lucide:bug" className="tw:size-4" />
            <span>DebugView</span>
          </ListItem>
        </List >
      ),
    },
    {
      value: 'ai',
      trigger: 'AI',
      content: 'Artificial Intelligence configuration',
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="tw:w-[400px] tw:bg-gray-900 tw:rounded-xl tw:text-gray-300"
    >
      {items.map($i => (
        <AccordionItem
          key={$i.value}
          value={$i.value}
          className="tw:border-b tw:border-gray-700 last:tw:border-0"
        >
          <AccordionTrigger className="tw:py-6 tw:px-6 hover:tw:no-underline">
            {$i.trigger}
          </AccordionTrigger>
          <AccordionContent className="tw:px-6 tw:pb-6">
            {$i.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
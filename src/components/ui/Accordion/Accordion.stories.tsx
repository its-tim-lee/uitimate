import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion.tsx';

export default {
  title: 'Example/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Type=single',
  render: () => {
    const [value, setValue] = useState('unique-id-2');
    const items = [
      {
        value: 'unique-id-1',
        disabled: true,
        trigger: "Am disabled, you can't turn me on",
        content: "You can't see this content",
      },
      {
        value: 'unique-id-2',
        trigger: "Click me can't toggle off",
        content: "This is because the accordion is not collapsible",
      },
    ];
    return (
      <Accordion value={value} type="single" className="w-full" onValueChange={e => setValue(e)}>
        {items.map($i => (
          <AccordionItem key={$i.value} value={$i.value} disabled={$i.disabled}>
            <AccordionTrigger>{$i.trigger}</AccordionTrigger>
            <AccordionContent>{$i.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export const Variant2 = {
  name: 'Type=single, Collapsible',
  render: () => {
    const [value, setValue] = useState('unique-id-2');
    const items = [
      {
        value: 'unique-id-1',
        disabled: true,
        trigger: "Am disabled, you can't turn me on",
        content: "You can't see this content",
      },
      {
        value: 'unique-id-2',
        trigger: "Click me to toggle the content",
        content: "Toggling the visibility of this content is due to the effect of `collapsible`",
      },
    ];
    return (
      <Accordion value={value} type="single" collapsible className="w-full" onValueChange={e => setValue(e)}>
        {items.map($i => (
          <AccordionItem key={$i.value} value={$i.value} disabled={$i.disabled}>
            <AccordionTrigger>{$i.trigger}</AccordionTrigger>
            <AccordionContent>{$i.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export const Variant3 = {
  name: 'Type=multiple',
  render: () => {
    const [value, setValue] = useState(['unique-id-2', 'unique-id-3'])
    const items = [
      {
        value: "unique-id-1",
        disabled: true,
        trigger: "Am disabled, you can't turn me on",
        content: "You can't see this content",
      },
      {
        value: "unique-id-2",
        disabled: false,
        trigger: "This content will show up initially",
        content: "This is because its `value` is included in `useState`",
      },
      {
        value: "unique-id-3",
        disabled: false,
        trigger: "This content will show up initially",
        content: "This is because its `value` is included in `useState`",
      },
      {
        value: "unique-id-4",
        disabled: false,
        trigger: "This content will NOT show up initially",
        content: "This is because its `value` is NOT included in `useState`",
      },
    ];
    return (
      <Accordion value={value} type="multiple" className="w-full" onValueChange={e => setValue(e)}>
        {items.map($i => (
          <AccordionItem key={$i.value} value={$i.value} disabled={$i.disabled}>
            <AccordionTrigger>{$i.trigger}</AccordionTrigger>
            <AccordionContent>{$i.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
}
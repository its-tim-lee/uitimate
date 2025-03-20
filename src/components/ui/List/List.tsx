import { Slot } from "@radix-ui/react-slot";
import { createContext, useContext, type ComponentProps, type CSSProperties } from "react";
import { tv } from "tailwind-variants";

// TBD: doc:
// It should make sense that putting the components other than ListItem inside List is considered inappropriate,
// it just like you don't really put stuff other than li inside ul.
// so to integrate the components like Accordion, Collapsible, etc.,
// the answer is straightforward: just put it as a child of ListItem.

const ListLevelContext = createContext(0);

/**
 * WARN: Do not provide non-minimal default styles, cuz it'd definitely hurt DX in some cases, and that has been proven from the experience.
 */
const listVariants = tv({
  base: 'tw:flex tw:flex-col tw:ml-(--indent-margin) tw:pl-(--indent-padding)',
});
type ListProps = ComponentProps<'div'> & { asChild?: boolean, indentMargin?: number, indentPadding?: number }
/**
 * The major thing that this component is doing is that when List is placed inside ListItem,
 * such List will be indented, so it provides nested sense of the style,
 * and the deeper the nested level, the more the indent.
 */
const List = ({
  className,
  asChild = false,
  /**
   * The tip to setup this value is breaking them down together in logic.
   * eg., if reducing `indentMargin` to half, then it's suggested to also do the same on another one.
   */
  indentMargin = 20,
  indentPadding = 12,
  ...props
}: ListProps) => {
  const level = useContext(ListLevelContext);
  const Comp = asChild ? Slot : 'div'
  return (
    <ListLevelContext.Provider value={level + 1}>
      <Comp
        data-tag='list'
        data-level={level}
        className={listVariants({ className })}
        style={{
          // the mixup of margin and padding is to support the left-side-border style of the nested list
          // TBD: link to the story
          '--indent-margin': `${level * indentMargin}px`,  // 20
          '--indent-padding': `${level ? indentPadding : 0}px`, // 12
        } as CSSProperties}
        {...props}
      />
    </ListLevelContext.Provider>
  )
}

/**
 * 🔥 Below describe how a list component is designed, which highly affects how you think and use such component.
 *
 * You may ask: "then why it needs to even be descirbed?"
 * Because, intuitively, this component is by far the most sophisticated one in the entire project;
 * the source code is very little here, but it packs enormous amount of concepts,
 * (again, this is really intuitive if you consider the sophistication by just linking the amount of code)
 * and since the apporach of our list component is entire different from all the UI libs on the market,
 * it worths to have few words.
 *
 * Let's dive in!
 *
 * A list is overwhelming common in the real world, so some libs provide the encapsulated components for that,
 * but the problem is, such component is also extremely flexible on the style side,
 * > If this reminds you the incrediably flexibility of a card component, you're on the right track!
 * > Just a side note that even the flexibility of a list is far less than a card,
 * > but the possible styles of a list (mostly of the list item) are still very diverse,
 * > and such level of flexibility implies the fact that, you really can't assume too much about the defaults,
 * > otherwise it'd only hurt the DX in many cases (ie., devs need to do lots of css-resetting)
 * so in many times, using such encapsulation can lead to lots of css-resetting or/and hacks.
 *
 *
 * The right way to design a list component is highly sophisticated, cuz it's very different from the design philosophy of the other components.
 * The design approach can be divided into 2 parts:
 *
 * 1) Component Design
 * The biggest reason is because, a list item is just like a card component, although the usage patterns of a list item is quite narrow comparing to a card component,
 * but the possible styles of that still very diverse, that implies that, we can only provide a bare minimum default styles, and leave the rest to the consumer.
 *
 * Providing non-minimal default styles will lead to lots of css-resetting in some (or many) cases, which hurts DX incredibly.
 * So not providing the defaults like padding, border and/or hover is intentional,
 * and the major consequence of using such setup is that, without manual setting padding by the consumer side, the result will look ugly.
 * But again, that's intentional.
 *
 *
 * 2) Sample Code
 * Probably only this component will considered the provided sample codes is actually part of the design.
 * But in fact, this is how we can make our encapsulation simple while still demostrating how to create a versatile list.
 * This is very different from a card component, even though both have extreme high flexibility,
 * but the usage patterns of a list are still quite narrow comparing to a card component,
 * and that's why providing the same codes making sense to be part of the design.
 * - the integration examples of with common components: dropdown, collapsible, and tooltip
 * - the varsatility of how a list component can be used
 *    - this one is literally for demo and review purpose
 * - the common scenarios
 */

/**
 * WARN: Do not provide non-minimal default styles, cuz it'd definitely hurt DX in some cases, and that has been proven from the experience.
 */
const listItemVariants = tv({
  base: [
    'tw:gap-2 tw:flex tw:items-center',
    // Below setup seems still work perfectly in our policy of "the direct child of List will only be ListItem" in many UI cases,
    // so far, it never failed.
    'tw:has-data-[tag=list]:gap-0 tw:has-data-[tag=list]:flex-col tw:has-data-[tag=list]:items-stretch',
  ],
});
type ListItemProps = ComponentProps<'div'> & { asChild?: boolean }
const ListItem = ({
  className,
  asChild = false,
  ...props
}: ListItemProps) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-tag='list-item'
      className={listItemVariants({ className })}
      {...props}
    />)
}

List.displayName = 'List'
ListItem.displayName = 'ListItem'

export {
  listVariants,
  listItemVariants,
  List,
  ListItem,
  type ListProps,
  type ListItemProps
}
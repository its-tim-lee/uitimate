import { Slot } from "@radix-ui/react-slot";

export const RadixSlot = () => {
  return (
	  <Slot
		onClick={(event) => {
      console.log('event', event);
			if (!event.defaultPrevented)
				console.log("Not logged because default is prevented.");
		}}
	>
		<button onClick={(event) => {
      console.log('event1');
      return event.preventDefault()
    }}>
			Button
		</button>
	</Slot>
  )
};
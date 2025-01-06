import { useRef } from "react";
import { Icon } from "@iconify/react";
const Child = (props: any) => <h2>Child passed from React</h2>

export default (props: any) => {
  // console.log('props', props)
  const ref = useRef(null);
  return (
    <>
         <Icon icon="eva:people-outline"/>

    <Parent title="Test1"><Child/></Parent>
    <Parent {...props} ref={ref}></Parent>
    <button onClick={() => console.log(ref.current)}>Check ref</button>
  </>
  );
};

export const Parent = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  console.log('props', props);

  return (
    <div {...props} ref={props.ref}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};
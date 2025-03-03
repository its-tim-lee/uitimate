import { Badge } from "@/components/ui/Badge/Badge.tsx";

export default () => {
  return (
    <div className="tw:flex tw:gap-2">
      <Badge variant='primary'>Primary</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='ghost'>Ghost</Badge>
    </div>
  );
};

import { Badge } from "@/components/ui/Badge/Badge.tsx";

export default () => {
  return (
    <div className="tw:flex tw:gap-2">
      <Badge variant='outline' size='sm'>
        SM
      </Badge>
      <Badge variant='outline' size='md'>
        MD
      </Badge>
      <Badge variant='outline' size='lg'>
        LG
      </Badge>
    </div>
  );
};

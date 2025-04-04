import { Icon } from "#/components/ui/Icon/Icon";
import { Cta } from "#/components/ui/Cta/Cta";

export default function AllProductsDemo() {
  return (
    <Cta
      variant="ghost"
      size="sm"
      className="tw:text-[#737373] tw:flex tw:items-center tw:gap-2 tw:rounded-full"
    >
      <Icon icon="mdi:dots-grid" className="tw:size-5" />
      <span>All products</span>
    </Cta>
  );
}
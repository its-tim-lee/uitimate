import { useState } from "react";
import { Icon } from "../ui/Icon/Icon";
import { Cta } from "../ui/Cta/Cta";

/**
 * This example shows the several tricks:
 * - By using CSS visibility, this is how we don't really specify an exact width for the button, but keep it the same width
 *   when its content only has an icon.
 * - Showing ways to just use class to control the visibility (so we don't need to use JS),
 *   but note that there're also other many Tailwind-approach can do the same
 */
export default () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Cta
      variant='primary'
      disabled={isLoading}
      onClick={() => setIsLoading(true)}
      className="tw:relative tw:disabled:[&_[data-submit]]:invisible tw:group"
    >
      <span data-submit>Submit</span>
      <span className="tw:invisible tw:group-disabled:visible tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center">
        <Icon icon="lucide:loader-circle" className="tw:animate-spin" />
      </span>
    </Cta>
  );
}
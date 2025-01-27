import * as React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert/Alert.tsx";
import { Icon } from "@iconify/react";

interface AlertComponentProps {
  title: string;
  description: string;
  variant?: "destructive" | "default";
  icon?: string;
  className?: string;
}

export function TestAlert({
  title,
  description,
  variant = "destructive",
  icon = "lucide:terminal",
  className = "max-w-[634px]"
}: AlertComponentProps) {
  return (
    <Alert
      variant={variant}
      className={className}
      role="alert"
      aria-live="polite"
    >
      <Icon
        icon={icon}
        className="tw-h-4 tw-w-4"
        aria-hidden="true"
      />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
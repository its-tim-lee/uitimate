import * as React from 'react';
import Alert from '@mui/material/Alert';

const ForkingAlert = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Alert>
>(({ children, ...props }, ref) => (
  <Alert ref={ref} severity="success" {...props}>
    {children || "Default alert message"}
  </Alert>
));

// ForkingAlert.displayName = "ForkingAlert";

export default ForkingAlert;

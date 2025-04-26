# @uitimate/drawer

## 2.0.1

### Patch Changes

- virutally wrap the major headless ui component into the package for preventing the upgrade from the consumer side on that component to break the code

## 2.0.0

### Major Changes

- Always require the control of the open status from the consumer side, so that this just makes Drawer overwhelming better.
  This just follows the same move as our Dialog such that, no DrawerContent and DrawerTrigger will be used anymore.

## 1.0.2

### Patch Changes

- Make drawer's overlay visibility controlable by using Tailwind from the consumer side

## 1.0.1

### Patch Changes

- Standardized drawer component.

# Changelog

## 1.1.1

### Patch Changes

- virutally wrap the major headless ui component into the package for preventing the upgrade from the consumer side on that component to break the code

## 1.1.0

### Minor Changes

- Strictly aling with the design definition of dialog.
  This version standardized the behavior of alertdialog to fit the definition from ARIA,
  at the same time, still allow the consumers to customize the dialog whatever they want,
  such as designing a modal having a X icon as a dialog-dismissable manner.

  So this version gets the beauty of the balance between the strict rules from ARIA,
  while allowing quite flexible customization in all other cases.

## 1.0.4

### Patch Changes

- Remove the modal concept to align with the design definition

## 1.0.3

### Patch Changes

- ✨ feat: Able to hide the overlay via Tailwind

## 1.0.2

### Patch Changes

- Cleaner encapsulation in <Dialog>

## 1.0.1

### Patch Changes

- Standardize the source code

## 1.0.0

First version passes the quality checker for the component

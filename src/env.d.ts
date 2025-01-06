/**
 * Using namespace is a good apporach:
 * - Great DX: now typing `App.` in VSC, you can access all the types in the namespace
 * - Will not conflict with other libraries (ie., other libs might have the same type name)
 */
namespace App {
  export interface ComponentProps {
    className?: string;
    [key: string]: any;
  }
}


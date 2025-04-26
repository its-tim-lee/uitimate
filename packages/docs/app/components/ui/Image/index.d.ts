/**
 * This file is preventing TS to complain that
 * the type declaration of the relevant packages (eg., `@uitimate/lib-image`),
 * when being imported somewhere, is not being found.
 */
declare module '@uitimate/lib-image' {
  export * from '@uitimate/lib-image-types';
}
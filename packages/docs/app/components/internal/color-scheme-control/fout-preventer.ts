console.log(localStorage.getItem('colorScheme'))


/**
 * This is only meant to be used inside <head> to be triggered before rendering to prevent FOUT/FOIT.
 */
const colorScheme = (
  typeof localStorage !== 'undefined' &&
  localStorage.getItem('colorScheme')
) ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

document.documentElement.classList[colorScheme === 'dark' ? 'add' : 'remove']('dark');
import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { delay } from "lodash-es";
import * as changeCase from 'change-case';

export * from "lodash-es";
export const sleep = (ms: number) => new Promise(resolve => delay(resolve, ms));

/**
 * Just like structureClone, but for objects only and be able to clone non-enumerable properties
 * Since all the properties (including non-enumerable ones) can be showned using `Reflect.ownKeys`,
 * which uses `Reflect` namespace, so `reflective` implies that usage.
 */
export const reflectiveClone = <T extends object>(source: T): T => {
  const target = {} as T;
  Reflect.ownKeys(source).forEach(k => (target as any)[k] = (source as any)[k]);
  return target;
}

export const casing = {
  ...changeCase,
  lowerCase: (e: string) => e.toLowerCase(),
  upperCase: (e: string) => e.toUpperCase(),
}

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

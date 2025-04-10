import { camelCase, upperFirst } from "lodash-es";

export const upperCamelCase = (s: string) => upperFirst(camelCase(s));

type ObjectKeys<T> = T extends Record<string, unknown>
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array<unknown> | string
  ? string[]
  : never;

export const keys = <T extends Record<string, unknown>>(object: T): ObjectKeys<T> => {
  return Object.keys(object) as ObjectKeys<T>;
};

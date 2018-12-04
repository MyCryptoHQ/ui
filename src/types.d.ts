import { Component, ComponentType } from 'react';

// Removes key type K from object type T
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Gets the prop type of a React component
export type ExtractProps<T> = T extends
  | ComponentType<infer P>
  | Component<infer P>
  ? P
  : never;

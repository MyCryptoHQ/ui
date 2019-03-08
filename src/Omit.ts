// Removes key type K from object type T
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export default Omit;

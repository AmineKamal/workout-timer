export function extract<T, K extends keyof T>(key: K) {
  return (object: T) => object[key];
}

export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function duplicate<T>(obj: T | T[], n: number) {
  let newArray: T[] = [];

  const element = Array.isArray(obj) ? obj : [obj];

  for (let i = 0; i < n; i++) {
    newArray = [...newArray, ...clone(element)];
  }

  return newArray;
}

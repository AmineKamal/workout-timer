export function multiplier(factor: number) {
  return (n: number) => n * factor;
}

export function lte(e: number) {
  return (n: number) => n <= e;
}

export function lt(e: number) {
  return (n: number) => n < e;
}

export function gte(e: number) {
  return (n: number) => n >= e;
}

export function gt(e: number) {
  return (n: number) => n > e;
}

export function sum(array: number[], exceptLast = 0) {
  let s = 0;

  for (let i = 0; i < array.length - exceptLast; i++) {
    s += array[i];
  }

  return s;
}

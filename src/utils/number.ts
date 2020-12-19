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

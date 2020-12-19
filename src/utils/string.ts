export function pad(n: number | string, width: number, z = '0') {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function toTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return pad(minutes, 2) + ':' + pad(seconds, 2);
}

export function toFraction(a: number, b: number) {
  return a + '/' + b;
}

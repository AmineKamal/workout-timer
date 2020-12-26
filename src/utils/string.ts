export function pad(n: number | string, width: number, z = '0') {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function toTime(time: number) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;
  return `${hours > 0 ? pad(hours, 2) + ':' : ''}${pad(minutes, 2)}:${pad(seconds, 2)}`;
}

export function toFraction(a: number, b: number) {
  return a + '/' + b;
}

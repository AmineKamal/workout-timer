export function pad(n: number | string, width: number, z = '0') {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function toTime(time: number, forcePad = false) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;
  return `${hours > 0 || forcePad ? pad(hours, 2) + ':' : ''}${pad(minutes, 2)}:${pad(seconds, 2)}`;
}

export function parseTime(str: string) {
  const times = str.split(':').map(Number);
  let seconds = 0;
  let multiplier = 1;

  while (times.length > 0) {
    seconds += times.pop() * multiplier;
    multiplier *= 60;
  }

  return seconds;
}

export function toFraction(a: number, b: number) {
  return a + '/' + b;
}

export function diffDates(fdate: string, sdate: string)
{
  const firstDate = fdate.split('-').map(Number) as [number, number, number];
  const secondDate = sdate.split('-').map(Number) as [number, number, number];

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const fDate = new Date(firstDate[0], firstDate[1], firstDate[2]);
  const sDate = new Date(secondDate[0], secondDate[1], secondDate[2]);

  // @ts-ignore
  const diffDays = Math.round(Math.abs((fDate - sDate) / oneDay));

  return diffDays;
}

export function stringifyJson(object: any): string
{
  let str = '';

  Object.keys(object).forEach((k) =>
  {
    str += k.toUpperCase() + ' : ' + object[k] + '\n';
  });

  return str;
}

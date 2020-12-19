export function getHex(color: string) {
  switch (color) {
    case 'success':
      return '#0b953d';

    case 'danger':
      return '#ca0b00';

    default:
      return '#488aff';
  }
}

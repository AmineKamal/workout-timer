export function getHex(color: string) {
  switch (color) {
    case 'success':
      return '#0b953d';

    case 'danger':
      return '#ca0b00';

    case 'tertiary':
      return '#5260ff';

    case 'secondary':
      return '#3dc2ff';

    case 'warning':
      return '#ffc409';

    default:
      return '#488aff';
  }
}

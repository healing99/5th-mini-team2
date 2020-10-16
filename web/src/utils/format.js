const toDoubleDigit = (number) => number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

export const toTimeFormat = (time) => {
  const hrs = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = Math.floor(time % 60);

  if (hrs > 0) return `${toDoubleDigit(hrs)}:${toDoubleDigit(mins)}:${toDoubleDigit(secs)}`;

  return `${toDoubleDigit(mins)}:${toDoubleDigit(secs)}`;
};

export const toCircledNum = (num) => {
  switch (num) {
    case 1:
      return '①';
    case 2:
      return '②';
    case 3:
      return '③';
    case 4:
      return '④';
    case 5:
    default:
      return '⑤';
  }
};

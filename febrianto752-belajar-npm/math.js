export const sum = (numbers) => {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
};

export const min = (first, second) => {
  if (first < second) {
    return first;
  } else {
    return second;
  }
};

export const max = (first, second) => {
  if (first > second) {
    return first;
  } else {
    return second;
  }
};

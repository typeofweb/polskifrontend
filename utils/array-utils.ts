export const getPagesArray = (lastPageNumber: number, length?: number): readonly string[] => {
  const fullArray = Array.from({ length: lastPageNumber + 1 }, (_val, index) =>
    index.toString(),
  ).reverse();
  if (length) {
    return fullArray.slice(0, length);
  }
  return fullArray;
};
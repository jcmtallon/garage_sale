export const getDistanceInDays = (date: Date, today: Date): number => {
  const differenceInTime = date.getTime() - today.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return Math.round(differenceInDays);
};

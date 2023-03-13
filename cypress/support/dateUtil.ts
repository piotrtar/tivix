export function getDateInGivenDaysFromNowAsString(days: number): string {
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getTime() + (days * 24 * 60 * 60 * 1000));
  const year = targetDate.getFullYear().toString();
  const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
  const day = targetDate.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
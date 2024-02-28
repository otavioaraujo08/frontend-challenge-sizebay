function getShortMonthName(month: number) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[month];
}

const currentDate = new Date();
const currentMonth = currentDate.getMonth();

export const monthOfYear = getShortMonthName(currentMonth);

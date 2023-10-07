const currentDate = new Date();
const year = currentDate.getFullYear();

export function getToday() {
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getTomorrow() {
  const tomorrowDate = new Date(
    year,
    currentDate.getMonth(),
    currentDate.getDate() + 1
  );
  const tomorrowYear = tomorrowDate.getFullYear();
  const tomorrowMonth = String(tomorrowDate.getMonth() + 1).padStart(2, "0");
  const tomorrowDay = String(tomorrowDate.getDate()).padStart(2, "0");
  return `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;
}

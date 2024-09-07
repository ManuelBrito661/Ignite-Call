export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2020, 5, day))))
    .map((weeDay) => {
      return weeDay.substring(0, 1).toUpperCase().concat(weeDay.substring(1))
    })
}

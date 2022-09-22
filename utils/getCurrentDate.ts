export const getCurrentTime = (isShort: boolean) => {
  let currentDay: string = new Date().toLocaleDateString('en-us', {
    day: 'numeric',
  })
  let currentMonth: string = new Date().toLocaleDateString('en-us', {
    month: 'long',
  })
  let currentMonthShort: string = new Date().toLocaleDateString('en-us', {
    month: 'short',
  })

  if (isShort) {
    return `Today is the ${currentDay}th of ${currentMonth}`
  } else {
    return `${currentMonthShort} ${currentDay}th`
  }
}

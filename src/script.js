const output_day = document.getElementById('output_day')
const output_month = document.getElementById('output_month')
const output_year = document.getElementById('output_year')

document.getElementById('submit_button').addEventListener('click', function () {
  const day_start = parseInt(document.getElementById('DAY').value)
  const month_start = parseInt(document.getElementById('MONTH').value) - 1
  const year_start = parseInt(document.getElementById('YEAR').value)

  const currentDate = new Date()
  const day_end = currentDate.getDate()
  const month_end = currentDate.getMonth()
  const year_end = currentDate.getFullYear()

  const startDate = new Date(year_start, month_start, day_start)
  const endDate = new Date(year_end, month_end, day_end)

  const timeDifference = Math.abs(endDate - startDate)

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const yearDifference = Math.floor(daysDifference / 365)
  const monthDifference = Math.floor((daysDifference % 365) / 30)
  const dayDifference =
    daysDifference - (yearDifference * 365 + monthDifference * 30)

  output_day.textContent = `${dayDifference} Days`
  output_month.textContent = `${monthDifference} Months`
  output_year.textContent = `${yearDifference} Years`
  console.log(`${dayDifference} days`)
  console.log(`${monthDifference} months`)
  console.log(`${yearDifference} years`)
})

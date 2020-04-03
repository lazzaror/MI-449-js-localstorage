/* Page Theme localStorage Reminder */
function loadTheme() {
  if (window.localStorage.getItem('pageTheme') === null) {
    window.localStorage.setItem('pageTheme', 'day-time')
  }

  document.body.setAttribute('class', window.localStorage.getItem('pageTheme'))

}

/* Page Views Counter */
function countVisits() {
  var pgViews = 0

  pgViews = parseInt(window.localStorage.getItem('numVisits'))
  if (isNaN(pgViews)) {
    pgViews = 0
  }
  pgViews += 1
  window.localStorage.setItem('numVisits', pgViews)

  document.getElementById('pgViews').innerHTML = pgViews
}

/* Toggle Button */
function changeTime() {
  if (document.body.className === 'day-time') {
    document.body.setAttribute('class', 'night-time')
    window.localStorage.setItem('pageTheme', 'night-time')
  }
  else {
    document.body.setAttribute('class', 'day-time')
    window.localStorage.setItem('pageTheme', 'day-time')
  }
}

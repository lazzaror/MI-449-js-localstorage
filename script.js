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
  if (isNaN(window.localStorage.getItem('numVisits'))) {
    window.localStorage.setItem('numVisits', '0')
  }

  pgViews = parseInt(window.localStorage.getItem('numVisits')) + 1
  console.log('pgViews is ' + pgViews)
  window.localStorage.setItem('numVisits', pgViews)
  
  console.log('numVisits is ' + window.localStorage.getItem('numVisits'))

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


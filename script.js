
var numVisits = 0

if (window.localStorage.getItem('numVisits') === null) {
  window.localStorage.setItem('numVisits', 0)
}

numVisits = parseInt(window.localStorage.getItem('numVisits')) + 1
window.localStorage.setItem('numVisits', numVisits)

document.getElementById('pgViews').innerHTML = numVisits

document.getElementById('btn1').addEventListener('click', changeTime())

function changeTime () {
  if (document.body.className === 'day-time') {
    document.body.setAttribute('class', 'night-time')
  }
  else {
    document.body.setAttribute('class', 'day-time')
  }
}

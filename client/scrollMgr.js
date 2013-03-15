var _ = require('lodash')
var shows = require('./data/shows')

$(function () {

  $('.content').on('scroll', _.debounce(scroll, 75))
})

var currentDay
var currentTime
function scroll() {
  var $el = $(document.elementFromPoint(2, 85))
  if (!$el.hasClass('show') && !($el = $el.next()).hasClass('show')) { return }
  var id = $el[0].id
  console.log($el[0].id)
  var show = shows.sync()[id]
  if (show.day !== currentDay) {
    currentDay = show.day
    $('header h1').text('Day ' + currentDay)
  }
}
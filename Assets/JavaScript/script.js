//To grab current date and time
dayjs.extend(window.dayjs_plugin_advancedFormat);
var now = dayjs().format('dddd, MMMM Do')


var displayDate = $('#currentDay')

//To display in the header
displayDate.text(now);

//To add a past, present, or future class to timeblocks

function renderColor() {
  var timeColor = parseInt(dayjs().format('H'));
  console.log(timeColor);
  var timeBlocks = $('.time-block');

  for (var timeSlot of timeBlocks) {
    var slotId = timeSlot.id;
    var idNumber = parseInt(slotId.split("-")[1]);

    if (idNumber < timeColor) {
      $(timeSlot).addClass('past');
    }
    else if (idNumber === timeColor) {
      $(timeSlot).addClass('present');
    }
    else { $(timeSlot).addClass('future') }
    console.log(idNumber)

  }
}
renderColor();

//To handle the save button to save to local storage
var hourSlots = $('.time-block')


hourSlots.on("click", function (event) {
  event.preventDefault;
  localStorage.setItem($(this).attr('id'), $(this).find('textarea').val())
  console.log($(this).find('textarea').val())
})

//To pull from local storage

function renderAgenda() {
  var timeBlocks = $('.time-block');

  for (var timeSlot of timeBlocks) {
    var slotId = timeSlot.id;
    console.log(slotId)

    var agenda = localStorage.getItem(slotId);
    $(timeSlot).find('textarea').val(agenda)
  }
}

renderAgenda();


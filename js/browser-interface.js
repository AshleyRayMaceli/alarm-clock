var displayTime = require('./../js/time.js').displayTime;
var setAlarm = require('./../js/time.js').setAlarm;

$(document).ready(function(){
  displayTime();

  $(".alarm").submit(function(event) {
    event.preventDefault();
    var hour = parseInt($("#hour").val());
    var minute = parseInt($("#minute").val());
    var second = parseInt($("#seconds").val());
    var alarmTime = setAlarm(hour, minute, second);

    $("#alarmConfirmation").text(setAlarm(hour, minute, second));
  });
});

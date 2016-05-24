var displayTime = require('./../js/time.js').displayTime;
var setAlarm = require('./../js/time.js').setAlarm;
// var alarmGoOff = require('./../js/time.js').alarmGoOff;
var checkAlarm = require('./../js/time.js').checkAlarm;

$(document).ready(function(){
  displayTime();
  var alarmTime;

  $(".alarm").submit(function(event) {
    event.preventDefault();
    var hour = parseInt($("#hour").val());
    var minute = parseInt($("#minute").val());
    var second = parseInt($("#seconds").val());
    alarmTime = setAlarm(hour, minute, second);

    setInterval(function() { checkAlarm(alarmTime); }, 1000);
    $("#alarmAction").text("Alarm will go off at " + setAlarm(hour, minute, second));
  });

  $(".snooze").click(function() {
    alarmTime = setAlarm(0, 0, 5);
    $("#alarmAction").text("Alarm will go off at " + alarmTime);
    $(".snooze").hide();
    $("#alarmAction2").text("");
  });
});

var updateClock = function() {
  var stop = checkAlarm(alarmTime);
  if (stop) {
    $("#alarmAction2").text("HEY WAKE UP");
    clearInterval(intervalID);
    console.log("STOP");
  } else {
    console.log("WAITING");
  }
}

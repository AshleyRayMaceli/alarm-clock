// $(document).ready(function() {
//   //$("#time").text(moment().format());
//   displayTime();
// });


var displayTime = function() {
  $("#time").text(moment().format('LTS'));
  setTimeout(displayTime, 1000);
}

exports.displayTime = displayTime;

var setAlarm = function (h, m, s) {
  alarmTime = moment().add(h, 'hours')
  .add(m, 'minutes')
  .add(s, 'seconds').format('LTS');
  return "Your alarm is set to go off at " + alarmTime;
}

exports.setAlarm = setAlarm;

var alarmGoOff = function(alarmTime) {
  if (alarmTime === moment()) {
    console.log("WAKE UP");
  }
}

exports.alarmGoOff = alarmGoOff;

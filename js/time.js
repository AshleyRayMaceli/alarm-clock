var displayTime = function() {
  $("#time").text(moment().format('LTS'));
  setTimeout(displayTime, 1000);
}

exports.displayTime = displayTime;

var setAlarm = function (h, m, s) {
  alarmTime = moment().add(h, 'hours')
  .add(m, 'minutes')
  .add(s, 'seconds').format('LTS');
  return alarmTime;
}

exports.setAlarm = setAlarm;

// var alarmGoOff = function(alarmTime) {
//   if (alarmTime === moment().format('LTS')) {
//     console.log("WAKE UP");
//     return "WAKE UP!";
//   } else {
//     console.log("Current Time = " + moment().format('LTS'));
//     console.log("Alarm Time = " + alarmTime);
//     var returnVal;
//     setTimeout(function() { returnVal = alarmGoOff(alarmTime); } , 1000);
//   }
//   return "Wake UP"
// }
//
// exports.alarmGoOff = alarmGoOff;


var checkAlarm = function(alarmTime) {
  if (alarmTime === moment().format('LTS')) {
    $("#alarmAction2").text("HEY WAKE UP");
    $(".snooze").show();
  } else {
    return;
  }
}

exports.checkAlarm = checkAlarm;

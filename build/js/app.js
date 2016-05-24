(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/time.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);

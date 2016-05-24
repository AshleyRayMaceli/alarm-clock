(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/time.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);

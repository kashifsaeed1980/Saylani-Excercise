/* 8. Write a JavaScript program to create a Clock.

Note: The output will come every second.

Expected Console Output :

"14:37:42"

"14:37:43"

"14:37:44"

"14:37:45"

"14:37:46"

"14:37:47" */

function my_Clock() {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
}
my_Clock.prototype.run = function () {
  setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function () {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
my_Clock.prototype.updateTime = function (secs) {
  this.seconds += secs;
  if (this.seconds >= 60) {
    this.minutes++;
    this.seconds = 0;
  }
  if (this.minutes >= 60) {
    this.hours++;
    this.minutes = 0;
  }
  if (this.hours >= 24) {
    this.hours = 0;
  }
};
var clock = new my_Clock();
clock.run();

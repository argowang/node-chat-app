const moment = require('moment');
// Jan 1st 1970 00:00:00 am

// var date = new Date();
//
// console.log(date.getMonth());
//
// new Date().getTime()
// var createdAt = 1234;
// var date = moment(createdAt);
// date.add(1, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));

// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

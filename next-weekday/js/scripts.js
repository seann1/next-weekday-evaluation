
weekday = function(day) {
   var dayInput = day.toLowerCase();
   var today = new Date();
   var currentDay = today.getDay();
   var todayParse = Date.parse(today);

   if (dayInput === "sunday") {
      var dayNumber = 0
    } else if (dayInput === "monday") {
      dayNumber = 1
    } else if (dayInput === "tuesday") {
      dayNumber = 2
    } else if (dayInput === "wednesday") {
      dayNumber = 3
    } else if (dayInput === "thursday") {
      dayNumber = 4
    } else if (dayInput === "friday") {
      dayNumber = 5
    } else if (dayInput === "saturday") {
      dayNumber = 6
    }

    var numberOfDays = (dayNumber - currentDay);
  if (numberOfDays < 0) {
    numberOfDays = currentDay + dayNumber - 1
  }

  var newDate = (numberOfDays * 86400000) + todayParse;

  return newDate
};




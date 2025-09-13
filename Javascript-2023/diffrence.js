// Find Days between Two Dates

function Days(date1, date2) {
  var date1 = new Date(date1).getTime();
  var date2 = new Date(date2).getTime();
  var Difference_In_Time = date2 - date1;

  var daysDiff = Difference_In_Time / (1000 * 60 * 60 * 24);

  console.log(daysDiff);
}

Days("01-01-2023", "02-01-2023");

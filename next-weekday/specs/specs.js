describe("weekday", function() {
  it ("returns the number of days between the day input and the current day", function () {
    weekday("Monday").should.equal(1);
  });
  it ("returns date of the next occurance of the day specified in the input in milliseconds", function () {
  	weekday("Monday").should.equal(1405367751000);
  });
  it ("returns the date of the next occurance of the day specified as an array. First element is a string of the day, second element is the month, third element is the day,fourth element is the year", function () {
  		weekday("tuesday").should.eql(["tuesday", 7, 15, 2014]);
  	});
});



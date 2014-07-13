describe("weekday", function() {
  it ("returns the number of days between the day input and the current day", function () {
    weekday("Monday").should.equal(1);
  });
  it ("returns date of the next occurance of the day specified in the input in milliseconds", function () {
  	weekday("Monday").should.equal(1405367751000)
  });
});



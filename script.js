$(function () {
  var day = dayjs();
  var hourValue = day.hour();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.

  $(".saveBtn").on("click", function () {
    var clickbtn = $(this);
    var parentTimeBlock = clickbtn.parent();
    var timeBlockId = parentTimeBlock.attr("id");
    var userInput = parentTimeBlock.children("textarea").val();

    localStorage.setItem(timeBlockId, userInput);
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //for loop, jquery method
  $(".time-block").each(function () {
    var classHour = $(this).attr("id").split("-")[1];

    if (hourValue == classHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if (hourValue < classHour) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    } else if (hourValue > classHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $("#hour-9 .description").text(localStorage.getItem("hour-9"));
  $("#hour-10 .description").text(localStorage.getItem("hour-10"));
  $("#hour-11 .description").text(localStorage.getItem("hour-11"));
  $("#hour-12 .description").text(localStorage.getItem("hour-12"));
  $("#hour-13 .description").text(localStorage.getItem("hour-13"));
  $("#hour-14 .description").text(localStorage.getItem("hour-14"));
  $("#hour-15 .description").text(localStorage.getItem("hour-15"));
  $("#hour-16 .description").text(localStorage.getItem("hour-16"));
  $("#hour-17 .description").text(localStorage.getItem("hour-17"));

  // TODO: Add code to display the current date in the header of the page.
  var day = dayjs();
  $("#currentDay").text(day.format("dddd, MMMM D"));
});

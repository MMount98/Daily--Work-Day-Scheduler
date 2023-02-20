//Set in a function to assure the codebase will only run after the html and css have loaded in.
$(function () {
  //DECLARED VARIBLES - globle
  var day = dayjs();
  var hourValue = day.hour();

  //sets the current day, mounth, and number day with refrence to the header elemwnr
  $("#currentDay").text(day.format("dddd, MMMM D"));

  //Click event with a function set to store user input to the local storage
  $(".saveBtn").on("click", function () {
    //DECLared VARIBLES - local

    var clickbtn = $(this); //sets this to listen to direct div
    var parentTimeBlock = clickbtn.parent(); //refrence to each boxes parent element
    var timeBlockId = parentTimeBlock.attr("id"); //refrence to each div's id of hour
    var userInput = parentTimeBlock.children("textarea").val(); //refrence to textarea and the value the user inputs

    localStorage.setItem(timeBlockId, userInput); //set a key and the value of users input to local storage
  });

  //This first refrence each div's textarea and set the text to the key's value from local storage
  $("#hour-9 .description").text(localStorage.getItem("hour-9"));
  $("#hour-10 .description").text(localStorage.getItem("hour-10"));
  $("#hour-11 .description").text(localStorage.getItem("hour-11"));
  $("#hour-12 .description").text(localStorage.getItem("hour-12"));
  $("#hour-13 .description").text(localStorage.getItem("hour-13"));
  $("#hour-14 .description").text(localStorage.getItem("hour-14"));
  $("#hour-15 .description").text(localStorage.getItem("hour-15"));
  $("#hour-16 .description").text(localStorage.getItem("hour-16"));
  $("#hour-17 .description").text(localStorage.getItem("hour-17"));

  /* each method with refrence to the time-blocks and nets a function to compare 
  the id element's value to the current hour */
  $(".time-block").each(function () {
    //DECLARED VARIBLE - local
    var classHour = $(this).attr("id").split("-")[1]; //use .attr to find id and .spilt to remove the "hour-" from the id

    /* if statement to compare the classHour var(local) to the hourValue(global) and 
    removes unwanted class and add needed class */
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
});

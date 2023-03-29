//Date/Time display
const storageInput = document.querySelector('.description');
const button = document.querySelector('.fa-save');

var now= dayjs()
$("#currentDay").text(now.format('MMM D, YYYY, h:mm a'));

var toDoInput = document.querySelector("description");


//event listener and local storage
$(document).ready(function () {
  $(button).on("click", function() {    
    if($(storageInput).val() !== ""){
      localStorage.setItem(storageInput).val();
        $("#hour8 .description").val(localStorage.getItem("hour8"));
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));
        $("#hour18 .description").val(localStorage.getItem("hour18"));

      alert("Schedule Saved!");
    }
  });
  
  function timeTracker() {
    var timeNow = now;

    $(".time-block").each(function() {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
                console.log("<");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
                console.log("===");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
                console.log(">");
            }
    })
  }

  timeTracker();
});

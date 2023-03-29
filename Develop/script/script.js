//Date/Time display
const storageInput = document.querySelector('.description');
const button = document.querySelector('.saveBtn');

var now= dayjs()
$("#currentDay").text(now.format('MMM D, YYYY, h:mm a'));

var toDoInput = document.querySelector("description");


//event listener and local storage
$(document).ready(function () {
  $(button).on("click", function() {    
    if($(storageInput).val() !== ""){
      localStorage.setItem(storageInput).val();

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

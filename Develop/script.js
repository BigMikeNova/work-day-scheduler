//Date/Time display
var now= dayjs()
$("#currentDay").text(now.format('MMM D, YYYY'));

//event listener and local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function() {
      var text = $(this).siblings(".description").val();
      var time = arguments(this).parent().attr("id");
      localStorage.setItem(time, text);
  });

  function timeTracker() {
    var timeNow = now;

    $(".time-block").each(function() {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
    })
  }

  timeTracker();
});

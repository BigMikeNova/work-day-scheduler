//event listener and local storage
$(document).ready(function () {
  var saveBtn = $(".saveBtn");
  var todayDate = dayjs().format('MMM D, YYYY, h:mm a');
  $("#currentDay").html(todayDate);
  $(saveBtn).on("click", function() {
    var text = $(this).siblings(".plan").val();
    var time = $(this).parent().attr("id");
    lovalStorage.setItem(time, text);
  });
});
  
  function timeTracker() {
    var timeNow = dayjs().hour();
    console.log(timeNow);

    $(".time-block").each(function() {
      var blockTime = parseInt($(this).attr("id"));
        console.log(blockTime);
            if (blockTime < timeNow) {
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
              
            }
          $("#" + hour + " textarea").val(localStorage.getItem(hour));
    });
  }

timeTracker();

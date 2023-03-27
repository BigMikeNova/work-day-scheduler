//Date/Time display
var now= dayjs()
$("#currentDay").text(now.format('MMM D, YYYY, h:mm a'));

var toDoInput = document.querySelector("description");

var toDos = [];


function init() {
  var storedTodos = JSON.parse(localStorage.getItem(toDoInput));

  if (storedTodos !== null) {
    toDos = storedTodos;
  }
};

function storeTodos() {
  localStorage.setItem("description", JSON.stringify(toDoInput));
};

//event listener and local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    
    var text = $(this).siblings("description").val();
    
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

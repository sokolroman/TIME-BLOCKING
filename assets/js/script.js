var currenttime = moment().hour();

currentDay = moment().format("LLLL");

document.getElementById("currentDayTitle").innerHTML = currentDay;

var startTime = moment("6:00am", "h:mma").format("h:mma");
var date = moment().format("L");

function submit(time) {
  var input = document.getElementById(time).value;
  localStorage.setItem(time, input);
}

function write() {
  for (i = 6; i < 22; i++) {
    var display = localStorage.getItem(`${i}`);
    var element = document.getElementById(`${i}`);
    element.value = display;

    if (i < currenttime) {
      element.disabled = true;
      element.style.backgroundColor = "rgba(255, 0, 0, .5)";
      console.log(document.querySelectorAll(".timeout"))
      document.querySelectorAll(".timeout")[i-6].style.backgroundColor = "rgba(255, 0, 0, .0)";
    } else if (i > currenttime) {
      element.style.backgroundColor = "rgba(0, 255, 0, .5)";
      document.querySelectorAll(".timeout")[i - 6].style.backgroundColor = "rgba(0, 255, 0, .0)";
    } else {
      element.style.backgroundColor = "rgba(255, 255, 0, .5)";
      document.querySelectorAll(".timeout")[i-6].style.backgroundColor = "rgba(255, 255, 0, .0)";
    }
  }
}


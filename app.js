startClock("clock");

function animateClock(span) {
  span.className = "turn";
  setTimeout(function() {
    span.className = "";
  }, 700);
}

function updateTime() {
  let time = new Date();
  return {
    hour: time.getHours() < 10 ? `0${time.getHours()}` : time.getHours(),
    minute:
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes(),
    second: time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()
  };
}

function startClock(id) {
  let timeInterval = setInterval(function() {
    let clock = document.getElementById("clock");
    let timer = updateTime();
    clock.innerHTML = `
    <span> ${timer.hour} </span> :
    <span> ${timer.minute} </span> : 
    <span> ${timer.second} </span>
    `;
    let spans = clock.getElementsByTagName("span");
    animateClock(spans[2]);
    if (timer.second === 59) animateClock(spans[1]);
    if (timer.minute === 59 && timer.second === 59) animateClock(spans[0]);
  }, 1000);
}

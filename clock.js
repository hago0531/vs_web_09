const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes >= 0 ? minutes : `0${minutes}`}:${
    seconds >= 10 ? seconds : `0${seconds}`
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

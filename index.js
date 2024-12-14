const daysSpan = document.querySelector("#days");
const hoursSpan = document.querySelector("#hours");
const minsSpan = document.querySelector("#mins");
const secsSpan = document.querySelector("#secs");
console.log(daysSpan);

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 15, 2024"),
});
const date = new Date();

const time = timer.selector.targetDate - date;

const timerHandler = () => {
  const timerId = setInterval(updateTime, 1000);
};
const updateTime = () => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  daysSpan.textContent = days.toString();
  hoursSpan.textContent = hours.toString();
  minsSpan.textContent = mins.toString();
  secsSpan.textContent = secs.toString();
};
timerHandler();

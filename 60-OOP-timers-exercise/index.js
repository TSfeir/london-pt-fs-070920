/**
 * Exercise 1
 *
 * create a class {Timer} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */
const addCounterEl = document.querySelector("#new_timer");

// USE THIS VARIABLE TO COUNT TIMERS
let timerClass = 0;
let timersCount = 0;
let timerID = 0;

class Timer {
  constructor(number) {
    this.timersContainerEl = document.querySelector(".timers");
    this.number = number;
    this.timerInterval = null;
  }

  getNumber() {
    return this.number;
  }

  getTimersContainerEl() {
    return this.timersContainerEl;
  }

  createStaticTimer() {
    const timerEl = document.createElement(`div`);
    const classRemoveDiv = document.createElement(`div`);
    const hThreeItem = document.createElement(`h3`);
    const spanItem = document.createElement(`span`);
    const classBtnDiv = document.createElement(`div`);
    const resetButton = document.createElement(`button`);
    const stopButton = document.createElement(`button`);

    timerEl.classList.add(`timer`);
    timerEl.classList.add(`timer_${this.number}`);
    classRemoveDiv.classList.add(`remove`);
    hThreeItem.innerText = `0`;
    spanItem.innerText = `00`;
    classBtnDiv.classList.add(`btn`);
    resetButton.classList.add("reset");
    resetButton.innerText = "Reset";
    stopButton.classList.add("stop");
    stopButton.innerText = "Stop";

    this.timersContainerEl.appendChild(timerEl);
    timerEl.appendChild(classRemoveDiv);
    timerEl.appendChild(hThreeItem);
    hThreeItem.appendChild(spanItem);
    timerEl.appendChild(classBtnDiv);
    classBtnDiv.appendChild(resetButton);
    classBtnDiv.appendChild(stopButton);
  }

  addListenersToTimer() {
    let newTimerInterval = this.startTimer(this.number);
    const timerStructure = document.querySelector(`div.timer_${this.number}`);
    const removeTimer = document.querySelector(
      `div.timer_${this.number} .remove`
    );
    const resetTimer = document.querySelector(
      `div.timer_${this.number} .reset`
    );
    const stopTimer = document.querySelector(`div.timer_${this.number} .stop`);

    removeTimer.addEventListener(`click`, (event) => {
      timerStructure.remove();
      timersCount--;
      console.log(timersCount);
    });

    resetTimer.addEventListener(`click`, (event) => {
      clearInterval(newTimerInterval);
      newTimerInterval = this.startTimer(this.number);
    });

    stopTimer.addEventListener(`click`, (event) => {
      clearInterval(newTimerInterval);
    });
  }

  startTimer() {
    let timePassed = 0;
    this.timeInterval = setInterval(() => {
      timePassed++;
      const seconds = timePassed / 100;
      const millisecs = timePassed % 100;
      const locateMinutes = document.querySelector(`.timer_${this.number} h3`);
      locateMinutes.innerHTML = `${seconds.toFixed(
        0
      )} <span>${millisecs}</span>`;
    }, 10);
    return this.timeInterval;
  }
}

addCounterEl.addEventListener("click", () => {
  if (timersCount < 5) {
    timerID++;
    timersCount++;
    timerClass = new Timer(timerID);
    timerClass.createStaticTimer();
    timerClass.addListenersToTimer();
  }
});

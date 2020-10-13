const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");
let timerInterval = null;

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;
let timerID = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

const createStaticTimer= (number) => {

    const timerEl = document.createElement(`div`);
    const classRemoveDiv = document.createElement(`div`);
    const hThreeItem = document.createElement(`h3`);
    const spanItem = document.createElement(`span`);
    const classBtnDiv = document.createElement(`div`);
    const resetButton = document.createElement(`button`);
    const stopButton = document.createElement(`button`);

    timerEl.classList.add(`timer`);
    timerEl.classList.add(`timer_${number}`);
    classRemoveDiv.classList.add(`remove`);
    hThreeItem.innerText = `0`;
    spanItem.innerText = `00`;
    classBtnDiv.classList.add(`btn`);
    resetButton.classList.add('reset');
    resetButton.innerText = 'Reset';
    stopButton.classList.add('stop');
    stopButton.innerText = 'Stop';

    timersContainerEl.appendChild(timerEl);
    timerEl.appendChild(classRemoveDiv);
    timerEl.appendChild(hThreeItem);
    hThreeItem.appendChild(spanItem);
    timerEl.appendChild(classBtnDiv);
    classBtnDiv.appendChild(resetButton);
    classBtnDiv.appendChild(stopButton);
}

const addListenersToTimer = (number) => {

    let newTimerInterval = startTimer(number);
    const timerStructure = document.querySelector(`div.timer_${number}`);
    const removeTimer = document.querySelector(`div.timer_${number} .remove`);
    const resetTimer = document.querySelector(`div.timer_${number} .reset`);
    const stopTimer = document.querySelector(`div.timer_${number} .stop`);

    removeTimer.addEventListener(`click`, (event) => {
        timerStructure.remove();
        timersCount--;
        console.log(timersCount);
    })

    resetTimer.addEventListener(`click`,(event) => {
        clearInterval(newTimerInterval);
        newTimerInterval = startTimer(number);
    })

    stopTimer.addEventListener(`click`,(event) => {
        clearInterval(newTimerInterval);
    })
}



addCounterEl.addEventListener('click', () => {
    if (timersCount < 5){
        timerID++;
        timersCount++;
        console.log(timersCount);
        createStaticTimer(timerID);
        addListenersToTimer(timerID);
    } 
});




const startTimer = (whichTimer) => {
    let timePassed = 0;
    timeInterval = setInterval(() => {
       timePassed++;
       const seconds = timePassed / 100;
       const millisecs = timePassed % 100;
       const locateMinutes = document.querySelector(`.timer_${whichTimer} h3`);
       locateMinutes.innerHTML = `${seconds.toFixed(0)} <span>${millisecs}</span>`;
    }, 10);
    return timeInterval;
}


let step = 0;
let counter = 0;
let interval = null;


/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */

const counterValue = document.querySelector('.counter_value');

const action = (symbol = `+` || `-`) => {
    if (symbol === `+`) {
        counter = parseInt(counter) + parseInt(step);
        } else {
            counter = parseInt(counter) - parseInt(step);
        }
    counterValue.innerText = counter;
}

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

const setStepClick = document.querySelector(`form.step_form`);
setStepClick.addEventListener('submit', (event) => {
    event.preventDefault();
    const stepsSetByUser = document.querySelector('.step_form input');
    step = parseInt(stepsSetByUser.value);
    stepsSetByUser.value = 1;
    const stepValue = document.querySelector(`.step_value`);
    stepValue.innerText = step;
    handleForm;
})


/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const decrement = document.querySelector(`.inc_dec #decrement`)
decrement.addEventListener('click', () => {action(`-`)});


/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const increment = document.querySelector(`.inc_dec #increment`)
increment.addEventListener('click', () => {action(`+`)});

/*
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoDecrement = document.querySelector('#auto_decrement');
autoDecrement.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {action(`-`)},1000);
})

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoIncrement = document.querySelector('#auto_increment');
autoIncrement.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {action(`+`)},1000);
})


/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

 const stopAutoNegative = document.querySelector('#stop_auto');
 stopAutoNegative.addEventListener('click', () => {clearInterval(interval)});

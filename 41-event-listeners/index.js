// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

const clickTheButton = () => {
    const clickClass = document.querySelector('.click');
    clickClass.addEventListener('click', event => {
        console.log('click!');
    });
}

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */

const hoverOver = () => {
    const hoverClass = document.querySelector('div.mouseover a');
    hoverClass.addEventListener('mouseover', event => {
        console.log('Hover and out!');
    });
}

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */

const handleLeave = () => {
    const leaveClass = document.querySelector('div.mouseover a');
    leaveClass.addEventListener('mouseout', event => {
        console.log('I am leaving you!');
    });
}

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const focusOnMe = () => {
    const focusedClass = document.querySelector('div.input input');
    focusedClass.addEventListener('focus', event => {
        console.log(`Let's focus now`);
    });
}

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

const clickElsewhere = () => {
    const focusedClass = document.querySelector('div.input input');
    focusedClass.addEventListener('blur', event => {console.log(`Goodbye!`)});
}

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

const pressAKey = () => {
    const pressKeyClass = document.querySelector('div.input input');
    pressKeyClass.addEventListener('keydown', event => {
        console.log(`Now you are typing...`);
    });
}

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const releaseAKey = () => {
    const releaseKeyClass = document.querySelector('div.input input');
    releaseKeyClass.addEventListener('keyup', event => {
        console.log(`Now you released the key...`);
    });
}

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const inputToUpperCase = () => {

    const releaseKeyClass = document.querySelector('[placeholder="Type here..."]');
    releaseKeyClass.addEventListener('keyup', event => {
        releaseKeyClass.value = releaseKeyClass.value.toUpperCase();
    });
}

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */

const handleSelectChange = () => {
    const logOptions = document.querySelector('.select #items');
    logOptions.addEventListener('change', event => {
        console.log(logOptions.value);
    });
}

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */

const submitFormHandler = () => {
    const formResult = document.querySelector('form');
    const resultObject = {firstName: '',lastName: ''};
    formResult.addEventListener('submit', event => {
        resultObject.firstName = formResult.querySelector('[placeholder="First name"]').value;
        resultObject.lastName = formResult.querySelector('[placeholder="Last name"]').value;
        console.log(resultObject);
    });
}


/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

 const handleScroll = () => {
    window.addEventListener('scroll', event => {
        console.log(window.scrollY);
    });
 }
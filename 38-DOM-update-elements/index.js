// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */

 const setTitle = (string) => {
     const stringTitle = document.querySelector('h1');
     stringTitle.innerText = string;
 }

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */

const appendToTitle = (string) => {
    const appendTitle = document.querySelector('h1');
    appendTitle.innerText += string;
}

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */

const prependToTitle = (string) => {
    const existingTitle = document.querySelector('h1');
    existingTitle.innerText = string + existingTitle.innerText;
} 

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should the tag name
 * passed into the function
 */

const setInnerHTMLForDiv = (tagName, text) => {
    const newElement = document.createElement(tagName);
    newElement.innerHTML = text;
    document.querySelector('div').appendChild(newElement);
}

/**
 * Exercise 5
 * create a function {addPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

const pushPtoDivWithText = (string) => {
    const newPElement = document.createElement('p');
    newPElement.innerHTML = string;
    document.querySelector('div').appendChild(newPElement);
}

/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */

const setSrcToImage = (urlString, imageDescription) => {
    const image = document.querySelector('img');
    image.src = urlString;
    image.alt = imageDescription;
}

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */

const setCodersInHoodsLink = (urlText, text) => {
    const findUrl = document.querySelector('a');
    findUrl.href = urlText;
    findUrl.innerText = text;
    findUrl.target = '_blank';
}

/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

const disableResetBtn = () => {
    const button = document.querySelector('.reset');
    button.disabled = true;
}

/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

const disableBtns = (className) => {
    const buttons = document.querySelectorAll(`.${className}`);
    [...buttons].forEach(button => button.disabled = true);
}

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

const addClassToLi = () => {
    const listElement = document.querySelectorAll('.list_item');
    for (i = 0; i < listElement.length; i++) {
        listElement[i].classList.add(`list_item_${i}`);
    }
}

/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

const removeListItemClass = () => {
    const liElement = document.querySelectorAll('li.list_item');
    [...liElement].forEach(element => element.classList.remove('list_item'));
} 

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

 const addId = (idParam, cssParam) => {
    const findElement = document.querySelectorAll(`${cssParam}`);
    for (i= 0; i < findElement.length; i++){
    findElement[i].id = `${idParam}`;
    }
 }

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */

 const setStyles = (cssPropertyName, propertyValue, cssSelector) => {
    const findElement = document.querySelectorAll(`${cssSelector}`);
    for (i = 0; i < findElement.length; i++) {
        findElement[i].style[`${cssPropertyName}`] = `${propertyValue}`;
    }
 }
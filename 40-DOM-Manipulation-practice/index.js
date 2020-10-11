/**
 * Exercise 1
 * create a function {createAList}
 *
 * Requirements:
 * 1. create an unordered list with class "list"
 * 2. with 1 second interval add list item to ".list" element
 * 3. you should add only 5 list items.
 * 4. list item text should be "Item $"($ - position in the list)
 */

const createAList = () => {
    const newList = document.createElement('ul');
    newList.classList.add('list');
    document.body.appendChild(newList);
    let newItem = [];
    let i = 0;

    const getToFive = () => {
        if (i<5) {
            newItem[i] = document.createElement('li');
            newItem[i].innerText = `Item ${i}`;
            newList.appendChild(newItem[i]);
            i++;
        } else {
            clearInterval(addItems);
        }
    }
    const addItems = setInterval(getToFive, 1000);

}

/**
 * Exercise 2
 *
 * create a function {styleElement}
 *
 * Requirements:
 * 1. select the third list item from "".myList"
 * 2. set background to "green" color
 * 3. set color to "white"
 * 4. set font size to 2em
 */

const styleElement = () => {
    const newList = document.querySelector('ul.myList li:nth-child(3)');
    newList.style.backgroundColor = 'green';
    newList.style.color = 'white';
    newList.style.fontSize = '2em';
}

/**
 * Exercise 3
 *
 * create a function {removeLastChild}
 * Requirements:
 * 1. select last element from the ".myList"
 * 2. wait 2 seconds and remove the element from the list
 */

 const removeLastChild = () => {
    const lastItem = document.querySelector('ul.myList li:last-child');
    setTimeout(() => {lastItem.remove()},2000);
 }

/**
 * Exercise 4
 *
 * create a function {createAMessage} which takes a message as parameter
 *
 * Requirements:
 * 1. create p element with class "message"
 * 2. text should be your {message}
 * 2. add it to the DOM
 * 4. after 3s add class "visible"
 * 5. after another 3s add class "hide"
 * 6. after another 2s remove from DOM
 *
 * NOTE: check css file to see how we toggle styles
 * based on class "visible"
 */

 const createAMessage = (message) => {
    const newItem = document.createElement('p');
    newItem.classList.add('message');
    newItem.innerText = message;
    document.body.appendChild(newItem);
    setTimeout(() => {
        newItem.classList.add('visible');
        setTimeout(() => {
            newItem.classList.add('hide');
            setTimeout(() => {
                newItem.remove()}, 2000);
            }, 3000);
    }, 3000);
 }


// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

 const createDOMElement = (tagName) => {
     return document.createElement(tagName);
 }

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

 const addPTag = (text) => {
    const pTag = document.createElement('p');
    pTag.innerText = text;
    document.body.appendChild(pTag);
    return pTag;
 }
/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

const addElementWithClass = (tagName, tagText, className) => {
    const createdElement = document.createElement(tagName);
    createdElement.classList.add(className);
    createdElement.innerText = tagText;
    document.body.appendChild(createdElement);
    return createdElement;
}

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

 const addElementWithMultipleClasses = (tagName, text, classesArray) => {
    const createdElement = document.createElement(tagName);
    createdElement.innerText = text;
    [...classesArray].forEach(classElement => createdElement.classList.add(classElement));
    document.body.appendChild(createdElement);
    return createdElement;
 }
/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

const buildAList = (listType = 'ul' || 'ol', listElementClass, numberOfLis) => {

    let listOfItems = [];
    let createdElement = [];
    const listCreated = document.createElement(listType);
    listCreated.classList.add(listElementClass);
    document.body.appendChild(listCreated);

    for (i = 0; i < numberOfLis; i++){
        createdElement[i]= document.createElement('li');
        listOfItems[i] = `Item ${i}`;
        listCreated.appendChild(createdElement[i]);
        createdElement[i].innerText = listOfItems[i];
    }
}

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

buildAList('ul', 'span', 5);

const prependLiToList = (someText, someClass) => {
    const locateList = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.classList.add(someClass);
    newLi.innerText = someText;
    locateList.prepend(newLi);
}

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

const pushToSelectedPosition = (someText, someClass, position) => {
    const locateList = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.classList.add(someClass);
    newLi.innerText = someText;
    locateList.insertBefore(newLi,locateList.children[position]);
}


/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

const deleteSelectedElements = (parentSelector, elementSelector) => {
    const findParent = document.querySelector(parentSelector);
    const findChildren = findParent.querySelectorAll(elementSelector);
    console.log(findChildren);
    [...findChildren].forEach(element => findParent.removeChild(element));
}
const createATag = (tagNameParam, classNameParam = [], idParam = "") => {
  const tagCreated = document.createElement(tagNameParam);
  tagCreated.classList.add(...classNameParam);
  tagCreated.id = idParam;
  return tagCreated;
};

const createATagWithChildren = (
  tagNameParam,
  classNameParam,
  idParam,
  childrenParam = []
) => {
  const tagCreated = createATag(tagNameParam, classNameParam, idParam);
  childrenParam.forEach((el) => {
    tagCreated.appendChild(el);
  });
  return tagCreated;
};

const addElement = (element, destination) => {
  const destinationDom = document.querySelector(destination);
  destinationDom.innerHTML += `<${element.tagName} class="${element.className}" id="${element.id}">${element.innerHTML}</${element.tagName}>`;
};

const getElement = (selector, all) => {
  if (all === true) {
    const elementsSelected = document.querySelectorAll(selector);
    return elementsSelected;
  } else {
    const elementSelected = document.querySelector(selector);
    return elementSelected;
  }
};

const removeElement = (selector, all) => {
  if (all === true) {
    const elementsSelected = document.querySelectorAll(selector);
    elementsSelected.forEach((el) => el.remove());
  } else {
    const elementSelected = document.querySelector(selector);
    elementSelected.remove();
  }
};

const addStyles = (selector, styleProperty, styleValue) => {
  const destinationDom = document.querySelector(selector);
  destinationDom.innerHTML += `style="${styleProperty}:${styleValue};"`;
};

const setText = (selector, text) => {
  const destinationDom = document.querySelector(selector);
  destinationDom.innerText = text;
};

module.exports = {
  createATag,
  createATagWithChildren,
  addElement,
  getElement,
  removeElement,
  addStyles,
  setText,
};

// node module.exports = {}
// browser export default {}

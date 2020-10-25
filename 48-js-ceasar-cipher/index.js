const stringSplit = (string, encryptOrNot) => {
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    newString.push(rotThirteenElement(string[i], encryptOrNot));
  }
  console.log(newString.join(``));
  return newString.join(``);
};

const moveUpThirteen = (element, encryptOrNot) => {
  if (element > 13 && encryptOrNot == true) {
    return element - 13;
  } else if (encryptOrNot == true) {
    return element + 13;
  } else if (element < 13 && encryptOrNot == false) {
    return element + 13;
  } else {
    return element - 13;
  }
};

const rotThirteenElement = (element, encryptOrNot) => {
  const inputUnicode = element.charCodeAt();

  let result = inputUnicode;

  if (inputUnicode >= 65 && inputUnicode <= 90) {
    result = moveUpThirteen(inputUnicode - 64, encryptOrNot) + 64;
  } else if (inputUnicode >= 97 && inputUnicode <= 122) {
    result = moveUpThirteen(inputUnicode - 96, encryptOrNot) + 96;
  }
  return String.fromCharCode(result);
};

const encryptButton = document.querySelector(`#encrypt`);
const decryptButton = document.querySelector(`#decrypt`);
const textEntered = document.querySelector(`textarea`);

encryptButton.addEventListener("click", () => {
  textEntered.value = stringSplit(textEntered.value, true);
});

decryptButton.addEventListener("click", () => {
  textEntered.value = stringSplit(textEntered.value, false);
});

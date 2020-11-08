const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */

const fetchData = async (url) => {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.all.filter((item) => item);
      // const factsArray = [];
      // const authorsArray = [];
      // data.all.forEach((fact) => {
      //   factsArray.push(fact.text);
      //   if (fact.user !== undefined) {
      //     authorsArray.push(`${fact.user.name.first} ${fact.user.name.last}`);
      //   }
      // });
      // return selectThreefacts(factsArray, authorsArray);
    });
};

const selectThreefacts = (factsArray) => {
  for (i = 0; i < 3; i++) {
    console.log(i);
    let selectRandom = Math.floor(Math.random() * factsArray.length);
    const newFact = document.createElement("li");

    newFact.innerHTML = `
      <p class="fact">${factsArray[selectRandom].text}</p>
      <p class="author">${factsArray[selectRandom].user.name.first} ${factsArray[selectRandom].user.name.last}</p>`;

    result.appendChild(newFact);
    factsArray.splice(selectRandom, 1);
  }
};

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

button.addEventListener("click", async (event) => {
  const facts = await fetchData("https://cat-fact.herokuapp.com/facts");
  selectThreefacts(facts);
});

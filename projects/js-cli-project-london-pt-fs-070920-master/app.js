const API = require("./lib/API");
const readlineSync = require("readline-sync");
const chalk = require('chalk');
const figlet = require('figlet');
const {bold, green, red} = require("kleur");
const { update } = require("./lib/API");

function clear() {
  for(var i = 0; i < 20; i++) {
    console.log("\n")
  }
}

const mainMenu = () => {

  console.log(chalk.green(figlet.textSync('art gallery', { horizontalLayout: 'full' })));
  console.log(bold().green("---------------------------------------------------------------------"));
  console.log(bold().green("------- 1. View our artists ---------- 2. View our inventory --------"));
  console.log(bold().green("------- 3. Quit -----------------------------------------------------"));
  console.log(bold().green("---------------------------------------------------------------------"));

  const choice = readlineSync.question("Please choose an option ");

  if (choice === "1") {
    clear();
    artistMenu();   
  }
  if (choice === "2") {
    clear();
    console.log(bold().red("We don't have any inventory yet, come back later."));
    setTimeout(() => {mainMenu();}, 2000);
  }
  if (choice === "3") {
    clear();
    console.log("Thank you, have a good day.")
    console.log(" ");
  } else {
    console.log("Wrong entry, please try again.");
    setTimeout(() => {mainMenu();}, 2000);
  }
}

function artistMenu(){
  console.log(bold().red("-----------------------"));
  console.log(bold().red("----- OUR ARTISTS -----"));
  console.log(bold().red("-----------------------"));
  console.log(bold().red("1. View/edit artists---"));
  console.log(bold().red("2. Add artist----------"));
  console.log(bold().red("3. Return to menu------"));
  console.log(bold().red("-----------------------"));
  const choice = readlineSync.question("Please choose an option ");

  if (choice === "1") {
    clear();
    viewArtists();   
  }
  if (choice === "2") {
    clear();
    addArtist();   
  }
  if (choice === "3") {
    clear();
    mainMenu();  
  } else {
    console.log("Wrong entry, please try again.");
    setTimeout(() => {mainMenu();}, 2000);
  }
}

const viewArtists = () => {
  console.log(bold().red("-------------------------"));
  console.log(bold().red("------ OUR ARTISTS ------"));
  console.log(bold().red("-------------------------"));
  const artists = API.read("artists");
  displayArtistsSummary(artists);
}

const displayArtistsSummary = (artists) => {
  console.log(' ');
  for (const artist of artists) {
    console.log(bold().blue(`xxx ${artist.id}: ${artist.name} xxx`));
  }
  console.log(' ');
  console.log(bold().blue("Type 'exit' if you want to get back to main menu."));
  console.log(" ");
  const whichArtist = readlineSync.question("Which artist do you want to edit? ");
  for (const artist of artists) {
    if (whichArtist == artist.id) {
      displayArtistDetail(artist);
    } else if (whichArtist == "exit"){
      mainMenu();
    } else {
      console.log("Wrong entry, please try again.");
      setTimeout(() => {mainMenu();}, 2000);
    }
  }
}

const displayArtistDetail = (artist) => {
  clear();
  console.log(bold().yellow(`- - - - ${artist.name} - - - -`));
  console.log(bold().yellow("- - - - - - - - - - - - - - - -"));
  console.log(" ");
  const editOrDelete = readlineSync.question("Do you want to edit or delete the artist (E/D)? ");

  if (editOrDelete == "E") {

    const artistEdit = readlineSync.question("What do you want to update's artist name to? ");
    console.log(artist.id);
    API.update("artists", {name: artistEdit, id: artist.id});
  }
    else if (editOrDelete == "D"){
    const artistDelete = readlineSync.question("Are you sure you want to delete this artist (Y/N)? ");
    console.log(artist.id);
    if (artistDelete == "Y") {
      API.destroy("artists", artist.id);
    } else if (artistDelete == "N"){
      mainMenu();
    } else {
      console.log("Wrong entry, please try again.");
      setTimeout(() => {mainMenu();}, 2000);
    }
  } else {
    console.log("Wrong entry, please try again.");
    setTimeout(() => {mainMenu();}, 2000);
  }
  mainMenu();
}

const addArtist = () => {
  const artistName = readlineSync.question("What is the artist's name? ");
  API.create("artists", {name: artistName});
  mainMenu();
}

mainMenu();
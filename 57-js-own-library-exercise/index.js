import theBestJsLibrary from "./theBestJsLibrary.js";

const el = theBestJsLibrary.createATag("p", ["test_class", "test_class2"]);
const el2 = theBestJsLibrary.createATag("p", ["test_class"]);
el.innerHTML = "Hello";
el2.innerHTML = "Hello";
theBestJsLibrary.addElement(el, "body");
theBestJsLibrary.addElement(el2, "body");

// theBestJsLibrary.removeElement(".test_class");

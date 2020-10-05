const {
  fireEvent,
  waitFor,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

jest.setTimeout(30000);

const initialDOM = document.body.innerHTML;

// Exercise 1
describe("createAList", () => {
  document.body.innerHTML = initialDOM;

  test("should be a function", () => {
    expect(typeof createAList).toEqual("function");
  });

  test("should add li element every second", async () => {
    createAList();
    expect(document.querySelectorAll(".list li").length).toEqual(0);

    await waitFor(
      () => {
        const listLi = document.querySelectorAll(".list li");
        expect(listLi.length).toEqual(1);
      },
      { timeout: 1000 }
    );

    await waitFor(
      () => {
        const listLi = document.querySelectorAll(".list li");
        expect(listLi.length).toEqual(5);
      },
      { timeout: 5000 }
    );
  });
});

// Exercise 2
describe("styleElement for myList", () => {
  test("should be a function", () => {
    expect(typeof styleElement).toEqual("function");
  });

  test("should set background color", () => {
    const li = document.querySelector(".myList li:nth-child(3)");
    expect(li.style.backgroundColor).toEqual("");
    expect(li.style.color).toEqual("");
    expect(li.style.fontSize).toEqual("");

    styleElement();

    expect(li.style.backgroundColor).toEqual("green");
    expect(li.style.color).toEqual("white");
    expect(li.style.fontSize).toEqual("2em");
  });
});

// Exercise 3
describe("removeLastChild", () => {
  document.body.innerHTML = initialDOM;
  test("should be a function", () => {
    expect(typeof removeLastChild).toEqual("function");
  });

  test("should remove last li from .myList", async () => {
    expect(document.querySelectorAll(".myList li").length).toEqual(5);

    removeLastChild();

    await waitFor(
      () => {
        expect(document.querySelectorAll(".myList li").length).toEqual(4);
      },
      { timeout: 2000 }
    );
  });
});

// Exercise 4
describe("createAMessage", () => {
  beforeEach(() => {
    document.body.innerHTML = initialDOM;
  });

  test("should be a function", () => {
    expect(typeof createAMessage).toEqual("function");
  });

  test("should create p tag with class 'message'", () => {
    createAMessage("Hello");
    expect(document.querySelector(".message")).toBeTruthy();
    expect(document.querySelector(".message").tagName).toEqual("P");
  });

  test("should has {message} as inner text", () => {
    createAMessage("Hello");

    expect(document.querySelector(".message").innerText).toEqual("Hello");

    document.querySelector(".message").remove();

    createAMessage("Reservation confirmed");
    expect(document.querySelector(".message").innerText).toEqual(
      "Reservation confirmed"
    );
  });

  test("should add class 'visible' after 3s", async () => {
    createAMessage("Reservation confirmed");
    expect(document.querySelector(".visible")).toBeFalsy();

    await waitFor(
      () => {
        expect(document.querySelector(".visible")).toBeTruthy();
      },
      { timeout: 3000 }
    );
  });

  test("should add class 'hide' after another 3s", async () => {
    createAMessage("Reservation confirmed");
    expect(document.querySelector(".hide")).toBeFalsy();

    await waitFor(
      () => {
        expect(document.querySelector(".hide")).toBeTruthy();
      },
      { timeout: 6000 }
    );
  });

  test("should remove '.message' element from the DOM after another 2s", async () => {
    createAMessage("Reservation confirmed");
    expect(document.querySelector(".message")).toBeTruthy();

    await waitFor(
      () => {
        expect(document.querySelector(".message")).toBeFalsy();
      },
      { timeout: 8000 }
    );
  });
});

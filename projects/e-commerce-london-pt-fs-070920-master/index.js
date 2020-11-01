let backgroundImageSelector = 0;
const ProductsInCart = document.querySelector(".Products_In_Cart");
let ProductsInCartValue = parseInt(localStorage.ProductsInCart) || 0;
ProductsInCart.innerText = ProductsInCartValue;

const homeButtonSelect = document.querySelector(".Top_Left.Home");
homeButtonSelect.addEventListener("click", () => {
  const buttonText = homeButtonSelect.innerText;
  const buttonColorResult = buttonText.fontcolor(`00C98D`);
  homeButtonSelect.innerHTML = buttonColorResult;
});

const largeArrowSelect = document.querySelector(".Large_Arrow");
largeArrowSelect.addEventListener("click", () => {
  const backgroundImage = document.querySelector(".Background-Image");
  if (backgroundImageSelector === 0) {
    backgroundImage.src = "styles/couch.svg";
    backgroundImageSelector = 1;
  } else if (backgroundImageSelector === 1) {
    backgroundImage.src = "styles/sofa.svg";
    backgroundImageSelector = 0;
  }
});

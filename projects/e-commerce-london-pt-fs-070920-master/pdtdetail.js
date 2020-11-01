const urlParams = new URLSearchParams(window.location.search);
const addToBasket = document.querySelector(".Add_To_Basket");
const productName = urlParams.get("productName");
const ProductsInCart = document.querySelector(".Products_In_Cart");
let ProductsInCartValue = parseInt(localStorage.ProductsInCart) || 0;
ProductsInCart.innerText = ProductsInCartValue;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const productNameOutput = document.querySelector(".Product_Detail_Name");
productNameOutput.innerText = productName;
let productImageSelector = 0;

arrowLeft.addEventListener("click", () => {
  console.log("clicked!");
  const productImage = document.querySelector(".Product_Image img");
  if (productImageSelector === 0) {
    productImage.src = "styles/detailedimage.svg";
    productImageSelector = 0;
  } else if (productImageSelector === 1) {
    productImage.src = "styles/sofa.svg";
    productImageSelector = 0;
  } else if (productImageSelector === 2) {
    productImage.src = "styles/couchview.svg";
    productImageSelector = 1;
  } else if (productImageSelector === 3) {
    productImage.src = "styles/couch.svg";
    productImageSelector = 2;
  }
});

arrowRight.addEventListener("click", () => {
  const productImage = document.querySelector(".Product_Image img");
  if (productImageSelector === 0) {
    productImage.src = "styles/detailedimage.svg";
    productImageSelector = 1;
  } else if (productImageSelector === 1) {
    productImage.src = "styles/sofa.svg";
    productImageSelector = 2;
  } else if (productImageSelector === 2) {
    productImage.src = "styles/couchview.svg";
    productImageSelector = 3;
  } else if (productImageSelector === 3) {
    productImage.src = "styles/couch.svg";
    productImageSelector = 3;
  }
});

addToBasket.addEventListener("click", (event) => {
  alert("Added to cart.");
  ProductsInCartValue++;
  ProductsInCart.innerText = ProductsInCartValue;
  localStorage.setItem("ProductsInCart", ProductsInCartValue);
});

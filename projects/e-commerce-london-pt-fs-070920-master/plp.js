const locateGrid = document.querySelector(".grid-container");
const defaultFilterSelection = document.querySelector(".default_filter");
const priceHighFilterSelection = document.querySelector(".price_high_filter");
const priceLowFilterSelection = document.querySelector(".price_low_filter");
const filtersForm = document.getElementById("filtersForm");
const filterCategory = document.querySelector(".filter_category");
const priceSlider = document.querySelector(".Sliders_Container");
const minPriceOutput = document.querySelector(".Price_Tag.Min");
const minPrice = document.getElementById("slider_min");
const maxPriceOutput = document.querySelector(".Price_Tag.Max");
const maxPrice = document.getElementById("slider_max");
const filterMenu = document.querySelector(".Filter_Menu");
const ProductsInCart = document.querySelector(".Products_In_Cart");
const dropButton = document.querySelector(".dropbtn");
let ProductsInCartValue = parseInt(localStorage.ProductsInCart) || 0;
ProductsInCart.innerText = ProductsInCartValue;

let filterSelection = 0;

window.addEventListener("load", (event) => {
  defaultProductList(products);
  buyProductAction();
});

defaultFilterSelection.addEventListener("click", (event) => {
  dropButton.innerText = "Best match";
  filterSelection = 0;
  filterProducts();
  buyProductAction();
});

priceHighFilterSelection.addEventListener("click", (event) => {
  dropButton.innerText = "Price: highest first";
  filterSelection = 1;
  filterProducts();
  buyProductAction();
});

priceLowFilterSelection.addEventListener("click", (event) => {
  dropButton.innerText = "Price: lowest first";
  filterSelection = 2;
  filterProducts();
  buyProductAction();
});

priceSlider.addEventListener("click", (event) => {
  minPriceOutput.innerText = `$${minPrice.value}`;
  maxPriceOutput.innerText = `$${maxPrice.value}`;
});

const removeProductsList = () => {
  const existingGridRemoved = locateGrid.querySelectorAll(".grid-item");
  existingGridRemoved.forEach((el) => el.remove());
};

const defaultProductList = (productList) => {
  removeProductsList();
  for (let i = 0; i < productList.length; i++) {
    createThumbnail(productList[i]);
  }
};

const priceHighProductList = (productList) => {
  removeProductsList();
  const localProducts = [...productList];
  localProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  for (let i = 0; i < localProducts.length; i++) {
    createThumbnail(localProducts[i]);
  }
};

const priceLowProductList = (productList) => {
  removeProductsList();
  const localProducts = [...productList];
  localProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  for (let i = 0; i < localProducts.length; i++) {
    createThumbnail(localProducts[i]);
  }
};

const createThumbnail = (product) => {
  const divGridItem = document.createElement(`div`);
  divGridItem.classList = "grid-item";
  divGridItem.innerHTML = `
    <a href="./pdtdetail.html?productName=${product.name}"><img src="Styles/Druid_Sofa.svg" alt="Druid Sofa" class="thumbnail_image"></a>
    <div class="white_rectangle">
      <div class="Product_Name_Text">${product.name}</div>
      <div class="Product_Type_Text">${product.type}</div>
    </div>
      <div class="another_white_rectangle">
        <div class="Product_Price_Text">$${product.price}</div>
        <div class="Buy_Product_Button">
          <img class="Buy_Product" src="Styles/Cart_Button.svg" alt="Cart Logo">
        </div>
      </div>`;

  locateGrid.appendChild(divGridItem);

  // a href="./pdtdetail.html?productName=${product.name}"
};

const collectFormData = () => {
  const colorInputs = filtersForm.querySelectorAll('input[name="color"]');
  const selectedColors = [];
  for (let i = 0; i < colorInputs.length; i++) {
    if (colorInputs[i].checked) {
      selectedColors.push(colorInputs[i].value);
    }
  }

  const selectedCategory =
    filterCategory.options[filterCategory.selectedIndex].value;
  const minPriceValue = parseInt(minPrice.value, 10);
  const maxPriceValue = parseInt(maxPrice.value, 10);

  return {
    colors: selectedColors,
    category: selectedCategory,
    price: [minPriceValue, maxPriceValue],
  };
};

const filterProducts = () => {
  const selectedFilters = collectFormData();

  const colorFilteredProducts = products.filter((product) => {
    let matchedColor = false;
    for (let i = 0; i < selectedFilters.colors.length; i++) {
      if (product.colors.includes(selectedFilters.colors[i])) {
        matchedColor = true;
      }
    }
    return matchedColor;
  });

  const categoryFilteredProducts = colorFilteredProducts.filter((product) => {
    return (
      selectedFilters.category === "" ||
      product.type === selectedFilters.category
    );
  });

  const filteredMaxProducts = categoryFilteredProducts.filter((product) => {
    return product.price <= selectedFilters.price[1];
  });

  const filteredProducts = filteredMaxProducts.filter((product) => {
    return product.price >= selectedFilters.price[0];
  });

  if (filterSelection === 0) {
    defaultProductList(filteredProducts);
  } else if (filterSelection === 1) {
    priceHighProductList(filteredProducts);
  } else if (filterSelection === 2) {
    priceLowProductList(filteredProducts);
  }
};

filterMenu.addEventListener("click", (event) => {
  filterProducts();
});

const buyProductAction = () => {
  const buyProductButton = document.querySelectorAll(".Buy_Product_Button");
  buyProductButton.forEach((el) => {
    el.addEventListener("click", (event) => {
      alert("Added to cart.");
      ProductsInCartValue++;
      ProductsInCart.innerText = ProductsInCartValue;
      localStorage.setItem("ProductsInCart", ProductsInCartValue);
    });
  });
};

const productsContainer = document.querySelector("#products");

const productDisplay = (productNumber) => {
    const productId = document.createElement(`div`);
    productId.setAttribute(`id`, `product_${productNumber}`);
    const productImage = document.createElement(`img`);
    productImage.src = products[productNumber].img;
    productsContainer.appendChild(productId);
    productId.appendChild(productImage);
    const productName = document.createElement(`h3`);
    productName.innerText = products[productNumber].name;
    productId.appendChild(productName);
    const productPrice = document.createElement('p');
    productPrice.innerText = products[productNumber].price;
    productId.appendChild(productPrice);
    const productQuantity = document.createElement('select');
    productId.appendChild(productQuantity);
    const maxQuantity = products[productNumber].max_quantity;
    for (let i = 0; i < maxQuantity + 1; i++){
        let quant =  document.createElement('option');
        quant.innerText = i;
        productQuantity.appendChild(quant);
    }
}

const addListeners = (element) => {
    const findSelector = document.querySelector(`div #product_${element} select`);
    findSelector.addEventListener('change', () => {
        const remainingBalance = document.querySelector(`div #remaining span`);
        const remainingBalanceValue = calcRemainingBalance();
        if (remainingBalanceValue < 0) {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error';
                errorMessage.innerText = `Not enough money left for that!`;
                productsContainer.appendChild(errorMessage);
                findSelector.value = 0;
        } else if (document.querySelector(`div.error`) != null){
            const errorMessage = document.querySelector(`div.error`);
            errorMessage.remove();
            remainingBalance.innerHTML = `<span>£${remainingBalanceValue.toFixed(2)}</span>`; 
        } else {
            remainingBalance.innerHTML = `<span>£${remainingBalanceValue.toFixed(2)}</span>`; 
        }
    })
}

for (i=0; i < products.length; i++){
    productDisplay(i);
    addListeners(i);
}

const calcRemainingBalance = () => {
    let remainingBalanceValue = 50;
    for (let i = 0; i < products.length; i++) {
        let findSelector = document.querySelector(`div #product_${i} select`);
        remainingBalanceValue = remainingBalanceValue - products[i].price * findSelector.value;
    }
    return remainingBalanceValue;
}

calcRemainingBalance()
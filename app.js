
const products = [
  {
    name: 'iPhone',
    description: 'this is an apple phone',
    price: 2000,
    currency: 'USD',
  },
  {
    name: 'Samsung Galaxy S25',
    description: 'this is another phone',
    price: 2500,
    currency: 'USD',
  },
  {
    name: 'AR15',
    description: 'tool to make you free',
    price: 1700,
    currency: 'USD',
  }
];

const MAX_AMOUNT = 10;

const PRICE_TO_GET_DISCOUNT = 20000;

const DISCOUNT = 1.5; // 3%

for (let i = 0; i < products.length; i++) {
  console.log(`
    Id: #${i+1}\n
    Name: ${products[i].name}\n
    Price: ${products[i].price} ${products[i].currency}
  `);  
}

let productNumber;
do {
  productNumber = parseInt(prompt(`Enter the product number you wanna buy (1-${products.length})`));
} while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));

const selectedProduct = products[productNumber - 1];

let productAmount;

do {
  productAmount = parseInt(prompt(`Enter the product amount you wanna buy (1 - ${MAX_AMOUNT})`));
} while(productAmount < 1 || productAmount > MAX_AMOUNT || isNaN(productAmount));


let finalPrice = productAmount * selectedProduct.price;

console.log(`The price is ${finalPrice} ${selectedProduct.currency}`)

if (finalPrice > PRICE_TO_GET_DISCOUNT) {
  finalPrice *= ((100 - DISCOUNT) / 100); // discount
  console.log(`And we give you the discount ${DISCOUNT}%\n
    So now, the final price is ${finalPrice} ${selectedProduct.currency}`);
}


// Magic Numbers


// for (let product of products) {
//   console.log(`Name: ${product.name}`);
//   console.log(`Price: ${product.price} ${product.currency}`);
// }







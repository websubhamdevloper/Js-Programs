let productPrices = {
  laptop: 1000,
  phone: 500,
  tablet: 300,
  headphones: 100,
  monitor: 250,
};

let totalPrice = 0;
let count = 0;

for (let product in productPrices) {
  totalPrice += productPrices[product];
  count++;
  console.log(product + ": $" + productPrices[product]);
}
console.log("The total products are ", count);
console.log("Total prices : $", totalPrice);

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

stringPrices.forEach(stringPrice => {
   const price = parseFloat(stringPrice) 
   priceTotal += price;
});

console.log(priceTotal)
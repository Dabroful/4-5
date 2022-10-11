'use strict'

const calculate = (amount, qty, promo) => {
  let total = amount;

  if(qty > 10) {
    total -= total * 0.03;
  }

  if(amount > 30000) {
     total -= total * 0.15;
  }

  if(promo === 'METHED') {
    total -= total * 0.1;
  }

  if(promo === 'G3H2Z1' && total > 2000) {
    total -= 500;
  }

return total;
}

console.log(calculate(32000, 11, 'METHED'));
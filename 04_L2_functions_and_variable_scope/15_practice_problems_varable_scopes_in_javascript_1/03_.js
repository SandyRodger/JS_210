let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv'; // this changes basket to tv
  }

  console.log(basket); // => empty

  let shop2 = function() {
    basket = 'computer'; // this changes basket to computer, which is what gets printed on line 23
  };

  const shop3 = () => {
    let basket = 'play station'; // this does not effect  the global basket, but does set a local basket.
    console.log(basket); // => play station
  };

  shop1(); 
  shop2();
  shop3();

  console.log(basket); // => computer
}

goShopping();
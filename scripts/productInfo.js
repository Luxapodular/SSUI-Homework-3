var productInfo = {
  'catHarness': {
    title: 'Muddy Paws Adventure Cat Harness',
    description: 'The Muddy Paws Adventure cat harness is a fantastic option for all of your mountain cat adventure needs. Turn your furry feline friend into a silly sassy sherpa in no time! Enjoy wonderful outdoor adventures in any of our wonderful colors, perfect for any season. To top it all off, our harnesses fit all sizes of cats, so if you’ve got a skinny kitty, or a chubzie-wubzie, we’ve got you covered!'
  },
  dogHarness: {
    title: 'Muddy Paws Adventure Dog Harness',
    description: 'Hold on to your Paws! The Muddy Paws Adventure Dog Harness is the best fit for your favorite muddy adventure companion. Your furry friend will have the time of their life with this unrestrictive, top-quality harness. Enjoy wonderful outdoor adventures in any of our wonderful colors, perfect for any season. To top it all off, our harnesses fit all sizes of dog, so we have you covered!'
  },
  'waterStorage': {
    title: 'Muddy Paws Water Storage Container',
    description: 'Your favorite furry pal will never run out of water with the Muddy Paws Water Storage Container Around! Feel free with the simple and easy ot use water storage system that fits perfectly into any Muddy Paws Harness! Your favorite adventure pal will thank you for the hydration, and your back will thank you for the lighter pack! Comes in all of our fabulus colors and sizes.'
  },
  'gpsCollar': {
    title: 'Link GPS Collar',
    description: 'Check out the best gps Collar on the market, the Link GPS collar system. The new and improved 2017 design will keep your favorite furry friend cool ,calm, and happy due to its wonderful and comfortable ergonomic design. Never worry about losing your favorite pal on an adventure ever again! Comes in all of our wonderful, fabulous, extravagant colors.'
  }
}

var productSizes = ['tiny', 'small', 'medium', 'large'];
var productColors = ['strawberry', 'blackberry', 'crazyberry', 'nightMoon', 'camoflauge', 'nightMoon', 'fireOrange'];

// Set product text info
function setInfo(product) {
  var info = productInfo[product];
  var title = info.title;
  var desc = info.description; 
  
  var descElem = document.getElementById('productDescription');
  descElem.innerHTML = desc;
  
  var titleElem = document.getElementById('productTitle');
  titleElem.innerHTML = title;
}

function addToCart () {
  if (localStorage.cartItems === undefined) {
    localStorage.cartItems = JSON.stringify([]);
  }
  
  var cartItems = JSON.parse(localStorage.cartItems);
  console.log(cartItems);
  
  var cartItem = {
    sizeTerm: localStorage.sizeTerm,
    colorTerm: localStorage.colorTerm,
    itemTerm: localStorage.chosenItem
  }
  cartItems.push(cartItem); 
  localStorage.cartItems = JSON.stringify(cartItems);
  console.log(localStorage.cartItems)
}

function setDefaults() {
  localStorage.sizeTerm = 'tiny'; 
  localStorage.colorTerm = 'strawberry'; 
  
  highlightSize('tiny'); 
  highlightColor('strawberry');
}

function connectButtons () {
  connectCartButtons(); 
  connectSizeButtons();
  connectColorButtons(); 
}

function connectSizeButtons() {
  productSizes.forEach(function(item) {
    document.getElementById(item).addEventListener('mouseup', function(){ 
      localStorage.sizeTerm = item;
      highlightSize(item); 
    });
  });
}

function connectColorButtons() {
  productColors.forEach(function(item) {
    document.getElementById(item).addEventListener('mouseup', function(){ 
      localStorage.colorTerm = item;
      highlightColor(item); 
    });
  });
}

function connectCartButtons() {
  elems = document.getElementsByClassName('addToCartButton');
  
  // convert nodeList to array
  [].slice.call(elems).forEach(function(element) {
    element.addEventListener('mouseup', function () { addToCart(); });
  });
}

function highlightSize(item) {
  productSizes.forEach(function(item) {
    document.getElementById(item).style.borderColor = "white";
    });

  document.getElementById(item).style.borderColor = "yellow"; 
}

function highlightColor(item) {
  productColors.forEach(function(item) {
    document.getElementById(item).style.borderColor = "white";
  });
  
  document.getElementById(item).style.borderColor = "yellow"; 
}

window.onload = function() {
  if (localStorage.chosenItem === undefined) {
    return; 
  }
  
  setInfo(localStorage.chosenItem);
  
  connectButtons(); 
  setDefaults(); 
}
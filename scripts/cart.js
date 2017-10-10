var defaultHTML = '<div class="cartElem"> <img class="cartElemImg" src="../assets/catHarness/catHarness_1.png"/> <div class="cartElemTitle"> reptitle </div> <div class="cartElemPrice"> reprice </div> <div class="cartElemSize"> resize </div> <div class="cartElemColor"> recolor </div> </div>'

function loadCart() {
  cartItems = JSON.parse(localStorage.cartItems);
  
  newHTML = "";
  
  cartItems.forEach(function(element) {
    console.log(element);
    htmCopy = defaultHTML;
    htmCopy = htmCopy.replace('reptitle', element.itemTerm);
    htmCopy = htmCopy.replace('reprice', element.price); 
    htmCopy = htmCopy.replace('resize', element.sizeTerm);
    htmCopy = htmCopy.replace('recolor', element.colorTerm); 
    newHTML += htmCopy; 
    
  }); 
  
  document.getElementById("cartElems").innerHTML = newHTML;
}

window.onload = function () {
  loadCart(); 
}
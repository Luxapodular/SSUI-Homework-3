var products = ['catHarness', 'dogHarness', 'waterStorage', 'gpsCollar'];

window.onload = function () {
  products.forEach(function(item) {
    document.getElementById(item).addEventListener('mousedown', function () {
      localStorage.chosenItem = item; 
    })
  });
}


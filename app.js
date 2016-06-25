// wrapping your javascript in a closure is a good habit.
(function() {
  var app = angular.module('store', []);

  // notice that controller is attached to (inside) our app.
  app.controller('StoreController', function(){
    this.product = gem; // product is a property of controller
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'this is a one-of-a-kind dodecahedron',
  }
})();

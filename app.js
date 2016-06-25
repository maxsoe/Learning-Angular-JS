// wrapping your javascript in a closure is a good habit.
(function() {
  var app = angular.module('store', []);

  // notice that controller is attached to (inside) our app.
  app.controller('StoreController', function(){
    this.products = gems; // product is a property of controller
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'this is a one-of-a-kind dodecahedron',
      canPurchase: true
      // soldOut: true
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Summon the demon',
      canPurchase: false
      // soldOut: true
    }
  ];
})();

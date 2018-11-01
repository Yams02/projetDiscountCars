angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', ['$scope', '$window', function ($scope, $window) {
  $scope.greeting = '';
  $scope.doGreeting = function(greeting) {
    $window.alert(greeting);
  };
  $scope.master = {};
  $scope.regex = '\\d+';
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };
  $scope.message = ' ';
  $scope.soumission = function (valid) {
    if(valid) {
      $scope.messageClass='alert-success';
      $scope.message = 'Merci ' + $scope.user.prenom + ' votre inscription est validée !';
    }
    else {
      $scope.messageClass='alert-danger';
      $scope.message = 'Désolé mais il y a des données non valides !';
    }
  };
  /*appPanier*/
  $scope.inventory = [
    { id :  1, category : "audi", description : "Audi A3 Diesel", price : 2.99, qty : 1, image: "assets/img/Audi-a3.jpg" },
    { id :  2, category : "citroen", description : "Citroen 2ch", price : 2.99, qty : 1, image: "assets/img/citroen-2cv.jpg" },
    { id :  3, category : "citroen", description : "Citroen C3 cactus", price :   6.99, qty : 1, image: "assets/img/citroen-c3.jpg" },
    { id :  4, category : "peugeot", description : "Peugeot 205", price : 12.99, qty : 1, image: "assets/img/peugeot-205.jpg" },
    { id :  5, category : "peugeot", description : "Peugeot 405", price : 29.99, qty : 1, image: "assets/img/peugeot-police.jpg" },
    { id :  6, category : "renault", description : "Renault 5", price : 29.99, qty : 1, image: "assets/img/renault-5.jpg" },
    { id :  7, category : "renault", description : "Renault Clio", price : 49.99, qty : 1, image: "assets/img/renault-clio.jpg" },
    { id :  8, category : "renault", description : "Renault Scenic", price : 79.99, qty : 1, image: "assets/img/renault-scenic.jpg" },
    { id :  9, category : "voiture enfant", description : "Collection", price : 119.99, qty : 1, image: "assets/img/voiture-enfant.jpg"}
  ];

  $scope.cart = [];

  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };

  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };

  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };

  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };

  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
}]);

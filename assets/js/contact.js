$(document).ready(function(){
  //input prenom
  $('#contact').click(function(){
alert('Besoin d\'aide :'+'\n'+'Contact support : +33');
  });
});
formApp = angular.module('formApp', []);
formApp.controller('formCtrl', function($scope) {
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
});

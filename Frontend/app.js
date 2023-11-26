var app = angular.module('myApp', []);
app.controller('MyController', function ($scope) {
    $scope.title = 'MOBILE STORE';
    $scope.titlee = 'Products:Apple Iphone';
    $scope.items = [
        { name: 'Apple Iphone 15 pro max', price: 159900 },
        { name: 'Apple Iphone 15 pro', price: 134900 },
        { name: 'Apple Iphone 14 pro max', price: 127999 },
        { name: 'Apple Iphone 14 pro', price: 119990 }
    ];
});
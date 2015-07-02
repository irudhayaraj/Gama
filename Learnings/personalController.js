angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Raj',age:24,gender:'male'},
        {name:'Mano',age:22,gender:'male'},
        {name:'Saro',age:21,gender:'female'},
        {name:'Reena',age:20,gender:'female'},
        {name:'Shaik',age:25,gender:'male'}
    ];
}); 

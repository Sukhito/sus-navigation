var app = angular.module('suus',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('nav',{
            url: '/',
            templateUrl: 'js/navigation/index.html',
            controller: 'NavCtrl'
        })

    $locationProvider.hashPrefix('');
});
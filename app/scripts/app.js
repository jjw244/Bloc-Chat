(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
    .html5Mode({
       enabled: true,
       requireBase: false
    });

    $stateProvider
    .state('home', {
       url: '/',
//       controller: 'HomeCtrl as home',
       templateUrl: '/templates/home.html'
    })
    
    $stateProvider
    .state('about', {
       url: '/about',
//       controller: 'HomeCtrl as home',
       templateUrl: '/templates/about.html'
    })
    
    $stateProvider
    .state('navbar', {
       url: '/navbar',
//       controller: 'HomeCtrl as home',
       templateUrl: '/templates/navbar.html'
    })
       
    $stateProvider
     .state('room', {
         url: '/room',
         controller: 'RoomCtrl as room',
         templateUrl: '/templates/room.html'
    })
     };
 
    angular
         .module('chatterBox', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
         .config(config);
 })();
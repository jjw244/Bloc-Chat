(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
         .state('room', {
             url: '/',
             controller: 'RoomCtrl as room',
             templateUrl: '/templates/home.html'
         }) 
         .state('modal', {
             url: '/modal',
             controller: 'ModalDemoCtrl as modal',
             templateUrl: '/templates/myModalContent.html'
         });
     }
 
    angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
         .config(config);
 })();
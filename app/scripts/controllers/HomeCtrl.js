(function () {
  function HomeCtrl(Home, Message) {
    
    this.homes = Home.all;

    this.selectHome = function (home) {
      this.selectedHome = home;
      this.messages = Message.getByHomeId(this.selectedHome);
    };
    
    this.sendMessage = function () {
      Message.send(this.newMessage, this.selectedHome);
      this.newMessage = '';
    };
  }

  angular
    .module('chatterBox')
    .controller('HomeCtrl', ['Home', 'Message', HomeCtrl]);
})();
(function () {
  function HomeCtrl(Room, Message) {
    this.rooms = Room.all;

    this.selectRoom = function (room) {
      this.selectedRoom = room;
      this.messages = Message.getByRoomId(this.selectedRoom);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
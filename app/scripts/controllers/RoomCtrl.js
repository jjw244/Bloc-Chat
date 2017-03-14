(function () {
  function RoomCtrl(Room, Message) {
    this.rooms = Room.all;

    this.selectRoom = function (room) {
      this.selectedRoom = room;
      this.messages = Message.getByRoomId(this.selectedRoom);
    }
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
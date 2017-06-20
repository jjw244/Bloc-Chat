(function () {
  function RoomCtrl(Room, Message) {
    
    this.rooms = Room.all;

    this.selectRoom = function (room) {
      this.selectedRoom = room;
      this.messages = Message.getByRoomId(this.selectedRoom);
    };
    
    this.sendMessage = function () {
      Message.send(this.newMessage, this.selectedRoom);
      this.newMessage = '';
    };
  }

  angular
    .module('chatterBox')
    .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
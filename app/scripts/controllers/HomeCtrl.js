(function () {
  function HomeCtrl(Room, Message, $scope) {
    this.rooms = Room.all;
    
    this.selectRoom = function(room) {
			this.selectedRoom = room;
			this.messages = Message.getByRoomId(this.selectedRoom);
//            $scope.test = this.messages;
      console.log(Message.getByRoomId(this.selectedRoom), this.selectedRoom);
		}

    debugger;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();

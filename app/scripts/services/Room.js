(function () {
  function Room($firebaseArray) {

    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    var addRoom = function (roomName) {
      rooms.$add(roomName).then(function (ref) {
        var id = ref.key;
      });
    }

    

    return {
      all: rooms,
      add: addRoom,
      //      messages: $firebaseArray(ref.child('messages').orderByChild("roomID").equalTo("roomId")),
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

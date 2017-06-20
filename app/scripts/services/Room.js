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
    };
  }

  angular
    .module('chatterBox')
    .factory('Room', ['$firebaseArray', Room]);
})();

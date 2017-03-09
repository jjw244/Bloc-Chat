(function () {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref.orderByChild("roomId").equalTo("-KdfV7WOUxToyYxkrs0q"));

    return {

      getByRoomId: function (roomId) {

        var test = $firebaseArray(ref.orderByChild('roomId').equalTo("-KdfV7WOUxToyYxkrs0q"));

        // Filter the messages by their room ID.
        //  Find all rooms with roomId equal to the clicked room in home.html

        console.log(test, messages);
        return messages;
        debugger;
      }
    };
    console.log(Message.getByRoomId);

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

(function () {
  function Message($firebaseArray, $cookies) {

    var ref = firebase.database().ref().child('messages');
    var messagesRef = $firebaseArray(ref);

    var getByRoomId = function (roomId) {
      var idMessages = ref.orderByChild('roomId').equalTo(roomId);
      return $firebaseArray(idMessages);
    };

    var sentAt = function () {
      
      var myDate = new Date();
//      var sec = myDate.getSeconds();
      var min = myDate.getMinutes();
      var hrs = myDate.getHours();
      var amPm = (hrs > 11) ? "pm" : "am";
      if (hrs > 12) {
        hrs -= 12;
      } else if (hrs == 0) {
        hrs = "12";
      }
      if (min < 10) {
        min = "0" + min;
      }
    
      return hrs + ":" + min + " " + amPm;
    }

    var send = function (newMessage, roomId) {
      var message = {
        username: $cookies.get('blocChatCurrentUser'),
        content: newMessage,
        sentAt: sentAt(),
        roomId: roomId
      }
      messagesRef.$add(message);
    };

    return {
      getByRoomId: getByRoomId,
      send: send,
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();

(function () {
  function NewRoomCtrl(Room, $uibModal, newroom) {

    this.open = function () {

      var modalInstance = $uibModal.open({

        templateUrl: '/templates/newRoom.html',
        controller: 'NewRoomInstanceCtrl',
        resolve: {
          newRoom: function () {
            return this.newroom;
          }
        }
      });

      modalInstance.result.then(function (newroom) {
        Room.add(newroom);
      });
    };
  };

  angular
    .module('blocChat')
    .controller('NewRoomCtrl', ['Room', '$uibModal', NewRoomCtrl]);
})();
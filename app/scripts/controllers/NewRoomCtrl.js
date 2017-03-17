(function () {
  function NewRoomCtrl(Room, $uibModal, newroom) {

    var $modal = this;

    $modal.open = function () {

      var modalInstance = $uibModal.open({

        templateUrl: '/templates/newRoom.html',
        controller: 'NewRoomInstanceCtrl',
        controllerAs: '$modal',
        resolve: {
          newRoom: function () {
            return $modal.newroom;
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
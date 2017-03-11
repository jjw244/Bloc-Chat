(function () {
  function ModalDemoCtrl(Room, $uibModal, newroom) {

    var $modal = this;

    $modal.open = function () {

      var modalInstance = $uibModal.open({

        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/myModalContent.html',
        controller: 'ModalInstanceCtrl',
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
    .controller('ModalDemoCtrl', ['Room', '$uibModal', ModalDemoCtrl]);
})();
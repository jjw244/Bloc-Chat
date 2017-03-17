(function () {
  function NewRoomInstanceCtrl($uibModalInstance) {

    var $modal = this;

    $modal.ok = function () {
      $uibModalInstance.close($modal.newroom);
    };

    $modal.cancel = function () {
      $uibModalInstance.dismiss();
    };
  };

  angular
    .module('blocChat')
    .controller('NewRoomInstanceCtrl', NewRoomInstanceCtrl);
})();
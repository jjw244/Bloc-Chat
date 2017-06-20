(function () {
  function NewRoomInstanceCtrl($uibModalInstance, $scope) {

    $scope.ok = function () {
      $uibModalInstance.close($scope.newroom);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss();
    };
  };

  angular
    .module('chatterBox')
    .controller('NewRoomInstanceCtrl', NewRoomInstanceCtrl);
})();
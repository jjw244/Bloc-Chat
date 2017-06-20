(function () {
  function ChatterBoxCookies($cookies, $uibModal, username) {
    
    if (!$cookies.get('chatterBoxCurrentUser') || $cookies.get('chatterBoxCurrentUser') === '') {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/userName.html',
        controller: 'UserNameInstanceCtrl',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          userName: function () {
            return this.username;
          }
        }
      });

      modalInstance.result.then(function (data) {
        $cookies.put('chatterBoxCurrentUser', data);
      });
    }
  }

  angular
    .module('chatterBox')
    .run(['$cookies', '$uibModal', ChatterBoxCookies]);
})();

(function () {
  function BlocChatCookies($cookies, $uibModal, username) {
    
    var $scope = this;
    
    if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/userName.html',
        controller: 'UserNameInstanceCtrl',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          userName: function () {
            return $scope.username;
          }
        }
      });

      modalInstance.result.then(function (data) {
        $cookies.put('blocChatCurrentUser', data);
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

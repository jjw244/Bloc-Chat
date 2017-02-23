(function() {
    function ModalDemoCtrl(Room, $uibModal, newroom) {
     
        var $ctrl = this;

        $ctrl.open = function () {
            
            var modalInstance = $uibModal.open({
                
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                resolve: {
                    newRoom: function () {
                      return $ctrl.newroom;
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
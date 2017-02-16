(function() {
    function ModalDemoCtrl($uibModal, $log, $document) {
        var modal = this;
        modal.items = ['item1', 'item2', 'item3'];
        modal.animationsEnabled = true;
        
        modal.open = function (size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
              animation: modal.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'myModalContent.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: 'modal',
              size: size,
              appendTo: parentElem,
              resolve: {
                items: function () {
                    return modal.items;
                }   
              }
            });

//            modalInstance.result.then(function (selectedItem) {
//              modal.selected = selectedItem;
//            }, function () {
//              $log.info('Modal dismissed at: ' + new Date());
//            });
        };

        $uibModal.open({
            animation: modal.animationsEnabled,
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            templateUrl: 'stackedModal.html',
            size: 'sm',
            controller: function($scope) {
                $scope.name = 'top';  
            }
        });
        
        modal.toggleAnimation = function () {
            modal.animationsEnabled = !modal.animationsEnabled;
        };
    }
    
     angular
         .module('blocChat')
         .controller('ModalDemoCtrl', ModalDemoCtrl);
})();
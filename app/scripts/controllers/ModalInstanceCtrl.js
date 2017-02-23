(function() {
    function ModalInstanceCtrl ($uibModalInstance) {

        var $ctrl = this;
    
        $ctrl.ok = function () {
            $uibModalInstance.close($ctrl.newroom);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss();
        };
    };
        
    angular
         .module('blocChat')
         .controller('ModalInstanceCtrl', ModalInstanceCtrl);
})();
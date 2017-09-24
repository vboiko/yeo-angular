(function() {
  'use strict';

  angular
    .module('workspace')
    .directive('acmeFooter', acmeFooter);

  /** @ngInject */
  function acmeFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {},
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController(Configuration) {
      var vm = this;
      vm.companyName = Configuration.getCompanyName()
      vm.copyrightDate = Configuration.getCopyrightDate()
    }
  }

})();

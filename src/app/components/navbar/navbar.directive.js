(function() {
  'use strict';

  angular
    .module('workspace')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($location, Configuration) {
      var vm = this;
      vm.navItems = Configuration.getNavItems();
      vm.currentActiveLink = $location.$$path.replace(/\//g, '') ? $location.$$path.replace(/\//g, '') : 'home'
      vm.companyName = Configuration.getCompanyName()
    }
  }

})();

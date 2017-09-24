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
    function NavbarController($location, Configuration, $mdDialog, $document) {
      var vm = this;
      vm.currentActiveLink = $location.path().replace(/\//g, '') ? $location.path().replace(/\//g, '') : 'home'

      // accessing data from configuration service
      vm.navItems = Configuration.getNavItems();
      vm.companyName = Configuration.getCompanyName()
      vm.applicationVersion =Configuration.getVersion()
      vm.applicationName = Configuration.getApplicationName()

      // about dialog
      vm.showAboutDialog = function(e) {
        $mdDialog.show({
          contentElement: '#aboutDialog',
          parent: angular.element($document.body),
          targetEvent: e,
          clickOutsideToClose:true
        })
      }
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('workspace')
    .factory('Configuration', Configuration);

  function Configuration(){

    var service = {
      getApplicationName: getApplicationName,
      getVersion: getVersion,
      getCompanyName: getCompanyName,
      getCopyrightDate: getCopyrightDate,
      getNavItems: getNavItems,
    };

    return service;

    function getVersion() {
      return "1.0.0";
    }

    function getApplicationName() {
      return "Some cool coding challenge application";
    }

    function getCompanyName() {
      return "Ucroo";
    }

    function getCopyrightDate() {
      // may want to return a date object to be i18n or l12n
      return new Date().getFullYear()
    }

    function getNavItems() {
      return [
        {
          label: "home",
          action: "navigate:home",
        },
        {
          label: "contact",
          action: "show:contactForm",
        },
        {
          label: "about",
          action: "show:aboutDialog",
        }
      ]
    }

  }

})();

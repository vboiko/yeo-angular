(function () {
  'use strict';

  angular
    .module('workspace')
    .factory('UIbuttons', UIbuttons);

  function UIbuttons() {

    var service = {
      getButtons: getButtons
    };

    return service;

    ////////////////////////////

    function getButtons() {
      var buttons = [{
          label: "Home",
          action: "navigate:home"
        },
        {
          label: "Contact",
          action: "show:contactForm"
        },
        {
          label: "About",
          action: "show:aboutDialog"
        }
      ];
      return buttons;
    }

  }

})();

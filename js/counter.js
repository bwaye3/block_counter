/* Counter Script -- easing not working */
(function ($, Drupal, drupalSettings) {

  'use strict';

 $('.count-number').counterUp({
    delay: 10,
    time: 2000,
    easing:'swing',
  });
})(jQuery, Drupal, drupalSettings);





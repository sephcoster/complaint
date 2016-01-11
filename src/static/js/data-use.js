'use strict';

require('jquery-easing');
require('./expandable');
require('./nemo');
require('./nemo-shim');
var resizeHandler = require('./handle-resize');


function isExpandableVisible () {
  return $('.expandable_target').is(':visible');
}

function toggleExpandables (expandablesVisible) {
  if (expandablesVisible) {
    // check that the plugin has been activated
    if (!$('.expandable').get(0).expand) {
      $('.expandable').expandable();      
    }
    $('.expandable_content')
      .attr("aria-expanded", "false")
      .hide();
  } else {
    $('.expandable_content')
      .attr("aria-expanded", "true")
      .removeAttr('style');    
  }
}

$(document).ready( function() {
  var expandableHandler = new resizeHandler(isExpandableVisible, toggleExpandables);
  expandableHandler.init();
});



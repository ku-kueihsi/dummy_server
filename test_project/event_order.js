goog.provide('eventOrder.start')

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyHandler');
goog.require('goog.graphics');
goog.require('goog.graphics.Font');
goog.require('jsaction.event');


var debugLog = function (s) {
  goog.global.window.console.log(s);
};


var eventHandler = function (e) {
  var target = jsaction.event.getTarget(e);
  jsaction.event.stopPropagation(e);
  debugLog("target = " + target.className + ', ' + this.className + ', '+ e.type);
};


eventOrder.start = function () {
  var divs = document.getElementsByTagName('div')

  goog.events.listen(
    divs[0],
    goog.events.EventType.MOUSEUP,
    eventHandler,
    false,
    divs[1]);

  // for(var i=0; i<divs.length; i++) {
  //   goog.events.listen(
  //     divs[i],
  //     goog.events.EventType.MOUSEUP,
  //     eventHandler,
  //     false);
  //   // divs[i].onclick = function(e) {
  //   //   e = e || event;
  //   //   var target = jsaction.event.getTarget(e);
  //   //
  //   //   this.style.backgroundColor='yellow';
  //   //
  //   //   alert("target = "+target.className+", this="+this.className);
  //   //
  //   //   this.style.backgroundColor = '';
  //   // }
  // }
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('eventOrder.start', eventOrder.start);

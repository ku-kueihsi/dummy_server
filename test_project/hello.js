goog.provide('test.start')

goog.require('goog.dom');
goog.require('goog.events')
goog.require('goog.events.EventType')
goog.require('goog.events.KeyHandler')
goog.require('goog.graphics')
goog.require('goog.graphics.Font');

var clickHandler = function(event) {
  // alert('Click');
  alert('Click at ' + event.clientX + ',' + event.clientY + ' on ' + event.target);
  //console.log('Click at ' + event.clientX + ',' + event.clientY + ' on ' + event.target);
};

function sayHi() {
  // alert('hello');
  // var graphics = goog.graphics.createGraphics('100%', '100%');
  var graphics = goog.graphics.createGraphics(1024, 1024);
  // graphics.setCoordSize(512, 512);
  // graphics.setSize('100%', '100%');

  // define the colors for the squares and the dot
  var square_fill = new goog.graphics.SolidFill('yellow');
  var square_stroke = new goog.graphics.Stroke(2, 'green');
  var dot_fill = new goog.graphics.SolidFill('blue');
  var dot_stroke = new goog.graphics.Stroke(1, 'black');

  // the dot's initial position
  var dot = {
    x: 1,
    y: 1
  };

  // properties
  var size = 40;
  var margin = 5;
  var width = size - margin;
  var num_rows = 3;
  var num_cols = 4;

  // draw the squares
  for (var x = 0; x < num_cols; x++) {
    for (var y = 0; y < num_rows; y++) {
      var rect = graphics.drawRect(margin + x * size, margin + y * size,
        width, width, square_stroke, square_fill);
      goog.events.listen(
        rect,
        goog.events.EventType.CLICK,
        function(e) {alert('Click Square!');});
    }
  }

  // Text elements
  fill = new goog.graphics.SolidFill('blue');
  stroke = null;

  var font = new goog.graphics.Font(30, 'Times');
  graphics.drawText('Large Top Center', 0, 0, 600, 200, 'center', null,
      font, stroke, fill);
  graphics.setElementTransform(rect, 0, 0, 45, 0, 0);

  font = new goog.graphics.Font(18, 'Arial');
  // font.setRotation(90);
  graphics.drawTextOnLine('Diagonal text', 200, 180, 400, 60, 'center',
      font, stroke, fill);

  // draw the dot
  dot['graphic'] = graphics.drawEllipse(margin + dot['x'] * size + width / 2,
    margin + dot['y'] * size + width / 2, width / 4, width / 4, dot_stroke,
    dot_fill);

  // call if the dot's position changes
  redraw_dot = function() {
    dot['graphic'].setCenter(margin + dot['x'] * size + width / 2, margin +
      dot['y'] * size + width / 2);
  }

  // goog.events.listen(
  //   dot['graphic'],
  //   goog.events.EventType.CLICK,
  //   clickHandler);
  //
  // dot['graphic'].dispatchEvent(goog.events.EventType.CLICK);

  goog.events.listen(
    dot['graphic'],
    goog.events.EventType.MOUSEMOVE,
    clickHandler);

  dot['graphic'].dispatchEvent(goog.events.EventType.MOUSEMOVE);

  goog.events.listen(
    window,
    goog.events.EventType.RESIZE,
    function() {
      // alert('resize');
      var parent = document.getElementById('shapes');
      // graphics.setCoordSize(parent.clientWidth, parent.clientHeight);
      graphics.setSize(parent.clientWidth, parent.clientHeight);
      graphics.setCoordSize(parent.clientWidth, parent.clientHeight);
      // graphics.setCoordSize(512, 512);
    });

  // key event handler
  var key_handler = new goog.events.KeyHandler(document);
  var key_event = function(e) {
    if (e.keyCode == goog.events.KeyCodes.UP && dot['y'] > 0) {
      dot['y'] -= 1;
    } else if (e.keyCode == goog.events.KeyCodes.RIGHT && dot['x'] <=
      num_cols - 2) {
      dot['x'] += 1;
    } else if (e.keyCode == goog.events.KeyCodes.DOWN && dot['y'] <=
      num_rows - 2) {
      dot['y'] += 1;
    } else if (e.keyCode == goog.events.KeyCodes.LEFT && dot['x'] > 0) {
      dot['x'] -= 1;
    }
    redraw_dot();
  }

  // put everything together
  goog.events.listen(key_handler, 'key', key_event);
  graphics.render(document.getElementById('shapes'));
  // graphics.render();
}

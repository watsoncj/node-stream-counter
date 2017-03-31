module.exports = ByteCounter;

var Transform = require('stream').Transform;
var util = require('util');

util.inherits(ByteCounter, Transform);
function ByteCounter(options) {
  Transform.call(this, options);
  this.bytes = 0;
}

ByteCounter.prototype._transform = function(chunk, encoding, cb) {
  this.bytes += chunk.length;
  this.push(chunk, encoding);
  this.emit('progress');
  cb();
};

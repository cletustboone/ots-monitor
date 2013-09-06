var
util   = require("util"),
EventEmitter = require("events").EventEmitter,
fs     = require("fs"),
log = require("./logger").log,
Monitor;

Monitor = function( options ) {
  this.options = options;
  if ( this.options.filename !== "true" ) {
    log.info( {event: {filename: this.options.filename, event: this.options.event}} );
  } else if ( this.options.filename == "true" ) {
    log.error( {event: {filename: this.options.filename, event: this.options.event}} );
  }
  return;
}

module.exports = exports = Monitor;

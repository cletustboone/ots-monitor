var
nopt = require("nopt");

// Option definitions
exports.known = {event: String, filename: String};
exports.aliases = {e: "--event", f: "--filename"};

// Parse cli options and return as an object.
Object.defineProperty( exports, "options", {
  get: function() {
    return nopt( exports.known, exports.aliases, process.argv, 2 );
  }
});

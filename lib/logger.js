var
bunyan = require("bunyan"),
infoLogFile = "info.log",
errorLogFile = "error.log",
log;

// Setup logger
log = bunyan.createLogger({
  name: "monitorLogger",
  streams: [
    {
      level: "info",
      path: infoLogFile
    },
    {
      level: "error",
      path: errorLogFile
    }
  ]
});

module.exports.log = log;

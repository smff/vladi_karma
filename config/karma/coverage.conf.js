var karmaConfig = require('./karma.conf.js');
karmaConfig.coverageIstanbulReporter.reports.push('html');

module.exports = function(config) {
  config.set(karmaConfig);
};

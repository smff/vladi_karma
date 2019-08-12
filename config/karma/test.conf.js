var karmaConfig = require('./karma.conf.js');
karmaConfig.coverageIstanbulReporter.reports.push('lcovonly');

module.exports = function(config) {
  config.set(karmaConfig);
};

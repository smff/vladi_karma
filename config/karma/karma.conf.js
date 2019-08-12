var webpackTestConfig = require('./webpack-test.config.js');

module.exports = {
  basePath: '../../',

  plugins: [
    "karma-jasmine",
    "karma-sourcemap-loader",
    "karma-coverage-istanbul-reporter",
    "karma-chrome-launcher",
    "karma-webpack"
  ],

  frameworks: ['jasmine'],

  files: [
    'config/karma/require.config.js'
  ],

  preprocessors: {
    'config/karma/require.config.js': ['webpack', 'sourcemap']
  },

  reporters: ['coverage-istanbul', 'dots'],

  coverageIstanbulReporter: {
    reports: ['cobertura', 'json'],
    dir: './test-results/',
    fixWebpackSourcePaths: true,
    'report-config': {
      html: {
        subdir: 'html'
      },
      cobertura: {
        file: 'coverage-mapped.xml'
      },
      lcovonly: {
        file: 'coverage-mapped.lcov'
      },
    }
  },

  webpack: webpackTestConfig,

  webpackMiddleware: {
    stats: 'errors-only',
    noInfo: true
  },

  hostname: 'localhost',
  'IE-vm-hostname': '10.0.1.2',
  'IE-vm-port': '3000',
  port: 9876,
  colors: true,

  customLaunchers: {
      IE11: {
          base: 'IE',
          'x-ua-compatible': 'IE=EmulateIE11',
          flags: ['-extoff']
      }
  },

  singleRun: false,
  browsers: ['ChromeHeadless'],
  browserNoActivityTimeout: 150000,
  concurrency: Infinity
};

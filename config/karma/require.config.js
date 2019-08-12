var testsContext = require.context('../../src', true, /-test\.tsx?$/);
var configure = require('enzyme').configure;
var Adapter = require('enzyme-adapter-react-16');
testsContext.keys().forEach(testsContext);
configure({ adapter: new Adapter() });

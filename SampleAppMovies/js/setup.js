

























var LoginScreen = require('./login/LoginScreen');
var Parse = require('parse/react-native');
var React = require('React');





var {serverURL} = require('./env');

function setup(): ReactClass<{}> {
  console.disableYellowBox = true;
  Parse.initialize('jbox-app-2016');
  Parse.serverURL = `${serverURL}/parse`;










  class Root extends React.Component {
    state: {
    };

    constructor() {
      super();
    }
    render() {
      return (
          <LoginScreen />
      );
    }
  }

  return Root;
}

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

module.exports = setup;

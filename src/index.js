require('medium-editor/dist/css/medium-editor.min.css');
require('medium-editor/dist/css/themes/default.css');
require('./style.css');

const MediumEditor = require('medium-editor');
const HashExtention = require('./hash.js');

const root = document.getElementById('root');
const editor = new MediumEditor(root, {
  autoLink: true,
  extensions: {
    'hash': new HashExtention()
  }
});

// webpack HMR
if (module.hot) {
  module.hot.accept('./hash.js', function() {
    console.log('Updating vn-editor');
  })
}
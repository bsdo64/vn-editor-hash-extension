const MediumEditor = require('medium-editor');

const HashExtention = MediumEditor.Extension.extend({
  name: 'hash',

  init() {
    console.log(this.base === this);

    this.subscribe('addElement', function (data, editable) {
      console.log('addElement', data);
    });

    this.subscribe('blur', function (data, editable) {
      console.log('blur', data);
    });

    this.subscribe('editableInput', function (data, editable) {
      console.log('editableInput', data);
    });

    this.subscribe('externalInteraction', function (data, editable) {
      console.log('externalInteraction', data);
    });

    this.subscribe('focus', function (data, editable) {
      console.log('focus', data);
    });

    this.subscribe('removeElement', function (data, editable) {
      console.log('removeElement', data);
    });

    this.subscribe('editableClick', function (data, editable) {
      console.log('editableClick', data);
    });
  },

  destroy() {
    console.log(2);
    /*this.detachEventHandlers();
    this.destroyMentionPanel();*/
  }
});

module.exports = HashExtention;

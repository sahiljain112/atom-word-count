'use babel';

import SahilWordCountView from './sahil-word-count-view';
import { CompositeDisposable } from 'atom';

export default {

  sahilWordCountView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.sahilWordCountView = new SahilWordCountView(state.sahilWordCountViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.sahilWordCountView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'sahil-word-count:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.sahilWordCountView.destroy();
  },

  serialize() {
    return {
      sahilWordCountViewState: this.sahilWordCountView.serialize()
    };
  },

  toggle() {
    console.log('SahilWordCount was toggled!');
      if(this.modalPanel.isVisible())
        this.modalPanel.hide()
      else {
        const editor = atom.workspace.getActiveTextEditor();
        const words = editor.getText().split(/\s+/).length;
        this.sahilWordCountView.setCount(words);
        this.modalPanel.show();
      }
    }

};

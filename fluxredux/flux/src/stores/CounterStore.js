import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 30,
  'Four':40,
};


const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function() {
    return counterValues;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
  console.log('================sdf',action)
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption] = Number(counterValues[action.counterCaption]) + Number(action.typeNumber);
    CounterStore.emitChange();
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption] =  Number(counterValues[action.counterCaption]) - Number(action.typeNumber);
    CounterStore.emitChange();
  }
});

export default CounterStore;

import {EventEmitter} from 'events';
import Dispatcher from 'core/Dispatcher';
import Actions from 'constants/Actions';

const CHANGE_EVENT = 'change';

/**
 * @type {object}
 * @private
 */
var _state = {};

var _savedState = {};

window._savedState = _savedState;
window._state = _state;

function loadState() {
    return JSON.parse(window._savedState);
}

function setName(name) {
    _state.name = name;
}

class Store extends EventEmitter {

    getState() {
        return _state;
    }

    /**
     * @param {function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    dispatchToken = Dispatcher.register((action) => {
        var payload = action.payload;
        switch (action.type) {
            case Actions.SAVE_STATE:
                window._savedState = JSON.stringify(_state);

                console.log('save', window._savedState);
                break;
            case Actions.LOAD_STATE:
                console.log('load', window._savedState);
                _state = loadState();
                this.emitChange();
                break;
            case Actions.SET_NAME:
                setName(payload);
                this.emitChange();
                break;
        }
    });
}

export default new Store();

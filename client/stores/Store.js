import {EventEmitter} from 'events';
import Dispatcher from 'core/Dispatcher';
import Actions from 'constants/Actions';

import initialState from '../../test/fixtures/state';

const CHANGE_EVENT = 'change';

/**
 * @type {object}
 * @private
 */
var _state = initialState;

var _savedState = {};

window._savedState = _savedState;
window._state = _state;

function loadState() {
    return JSON.parse(window._savedState);
}

function setName(name) {
    _state.name = name;
}

function selectCategory(id) {
    _state.categories.forEach((category) => {
        if (category.id === id) {
            category.selected = true;
        }
    });
}

function stopCargoEditing() {
    delete _state.editingCargo;
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
                break;
            case Actions.LOAD_STATE:
                _state = loadState();
                this.emitChange();
                break;
            case Actions.SET_NAME:
                setName(payload);
                this.emitChange();
                break;
            case Actions.SELECT_CATEGORY:
                selectCategory(payload);
                this.emitChange();
                break;
            case Actions.STOP_CARGO_EDITING:
                stopCargoEditing();
                this.emitChange();
                break;
        }
    });
}

export default new Store();

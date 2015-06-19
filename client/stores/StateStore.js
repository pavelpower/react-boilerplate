import {EventEmitter} from 'events';
import Dispatcher from 'core/Dispatcher';
import Actions from 'constants/Actions';
import Store from 'stores/Store';

const CHANGE_EVENT = 'change';

/**
 * @type {object}
 * @private
 */
window.state = null;

function saveState() {
    window.state = JSON.stringify(Store.getState());
    localStorage.setItem('state', window.state);
}

function loadState() {
    var state = localStorage.getItem('state');
    Store.setState(state);
}

window.saveState = saveState;
window.loadState = loadState;

class StateStore extends EventEmitter {

    /**
     * @returns {Object}
     */
    getState() {
        return _state;
    }

    /**
     * @param {Function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    /**
     * @param {Function} callback
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
                Dispatcher.waitFor([Store.dispatchToken]);
                saveState();
                break;
            case Actions.LOAD_STATE:
                loadState();
                this.emitChange();
                break;
        }

        this.emitChange();
    });
}

export default new StateStore();

import {EventEmitter} from 'events';
import Immutable from 'immutable';
import React from 'react/addons';
import Dispatcher from 'core/Dispatcher';
import Actions from 'constants/Actions';

import {parseConfig, parseCargo} from 'core/parsers';

import config from '../../test/fixtures/config';

const CHANGE_EVENT = 'change';

/**
 * @type {object}
 * @private
 */
var _state = parseConfig(config);

function selectCategory(id) {
    _state.selectedCategory = _state.categories[id];
}

function addCargo(type) {
    var cargo = config.cargos[type];
    _state.cargos = _state.cargos.push(parseCargo(cargo));
}

function removeCargo(cargoId) {
    _state.cargos = _state.cargos.delete(cargoId);
}

function startCargoEditing(cargoId) {
    _state.editingCargoId = cargoId;
    _state.editingCargo = _state.cargos.get(cargoId);
}

function stopCargoEditing() {
    _state.cargos = _state.cargos.set(_state.editingCargoId, _state.editingCargo);
    _state.editingCargo = null;
}

function cancelCargoEditing() {
    _state.editingCargo = null;
}

function updateEditingCargo({key, value}) {
    _state.editingCargo = _state.editingCargo
        .setIn(['properties', key, 'value'], value);
}

class Store extends EventEmitter {

    /**
     * @returns {Object}
     */
    getState() {
        return _state;
    }

    setState(state) {
        var data = JSON.parse(state);
        console.log(data);
        _state = {
            categories: data.categories,
            selectedCategory: data.selectedCategory,
            properties: data.properties,
            cargos: Immutable.fromJS(data.cargos),
            editingCargo: data.editingCargo
        }
        console.log(_state);
        this.emitChange();
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
            case Actions.SELECT_CATEGORY:
                selectCategory(payload);
                break;

            case Actions.ADD_CARGO:
                addCargo(payload);
                break;

            case Actions.REMOVE_CARGO:
                removeCargo(payload);
                break;

            case Actions.START_CARGO_EDITING:
                startCargoEditing(payload);
                break;

            case Actions.STOP_CARGO_EDITING:
                stopCargoEditing();
                break;

            case Actions.CANCEL_CARGO_EDITING:
                cancelCargoEditing();
                break;

            case Actions.UPDATE_EDITING_CARGO:
                updateEditingCargo(payload);
                break;
            default:
                return;
        }

        this.emitChange();
    });
}

export default new Store();

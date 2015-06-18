import {EventEmitter} from 'events';
import Immutable from 'immutable';
import React from 'react/addons';
import Dispatcher from 'core/Dispatcher';
import Actions from 'constants/Actions';

import initialState from '../../test/fixtures/state';
import config from '../../test/fixtures/config';

const CHANGE_EVENT = 'change';

/**
 * @type {object}
 * @private
 */
var _state = parseConfig(config);

var _savedState = {};

window._savedState = _savedState;
window._state = _state;

function parseConfig(data) {
    return {
        categories: parseCategories(data.categories),
        selectedCategory: null,

        properties: data.general,

        cargos: Immutable.List(),
        editingCargo: null
    }
}

function parseCategories(data) {
    return Object.keys(data).reduce((result, key) => {
        data[key].id = key;
        result[key] = data[key];
        return result
    }, {});
}

function addCargo(type) {
    var cargo = config.cargos[type];
    //_state.cargos = _state.cargos.set(_state.cargos.size + 1, parseCargo(cargo));
    _state.cargos = _state.cargos.push(parseCargo(cargo));
}

var Cargo = Immutable.Record({
    name: undefined,
    properties: Immutable.Map()
});

var Property = Immutable.Record({
    id: undefined,
    type: undefined,
    name: undefined,
    placeholder: undefined,
    value: undefined
});

function parseCargo(data) {
    return new Cargo({
        name: data.name,
        properties: Immutable.Map(
            data.properties.map(property => [property.id, new Property(property)])
        )
    });
    //return Immutable.Map({
    //    name: data.name,
    //    properties: Immutable.fromJS(data.properties.reduce((result, property) => {
    //        result[property.id] = property;
    //        return result;
    //    }, {}))
    //})
}

function loadState() {
    return JSON.parse(window._savedState);
}

function setName(name) {
    _state.name = name;
}

function selectCategory(id) {
    _state.selectedCategory = _state.categories[id];
    //_state.categories.forEach((category) => {
    //    if (category.id === id) {
    //        category.selected = true;
    //    }
    //});
}

//function startCargoEditing(cargoId) {
//    _state.editingCargo = _state.cargos.get(cargoId);
//}
function startCargoEditing(cargoId) {
    console.info(cargoId);
    _state.editingCargoId = cargoId;
    _state.editingCargo = _state.cargos.get(cargoId);
    console.info(_state.editingCargo);
}

function stopCargoEditing() {
    //_state.cargos[_state.editingCargo.id] = _state.editingCargo;
    _state.cargos = _state.cargos.set(_state.editingCargoId, _state.editingCargo);
    _state.editingCargo = null;
}

function cancelCargoEditing() {
    _state.editingCargo = null;
}

function updateEditingCargo({key, value}) {
    //_state.editingCargo.properties[key].value = value
    //var properties = _state.editingCargo.get('properties');
    //properties = properties.set(key, value);
    _state.editingCargo = _state.editingCargo
        .setIn(['properties', key, 'value'], value);
    //_state.editingCargo = _state.editingCargo.setIn();
}

function removeCargo(cargoId) {
    _state.cargos = _state.cargos.delete(cargoId);
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
            case Actions.START_CARGO_EDITING:
                startCargoEditing(payload);
                this.emitChange();
                break;
            case Actions.STOP_CARGO_EDITING:
                stopCargoEditing();
                this.emitChange();
                break;
            case Actions.CANCEL_CARGO_EDITING:
                cancelCargoEditing();
                this.emitChange();
                break;
            case Actions.UPDATE_EDITING_CARGO:
                updateEditingCargo(payload);
                this.emitChange();
                break;
            case Actions.ADD_CARGO:
                addCargo(payload);
                this.emitChange();
                break;
            case Actions.REMOVE_CARGO:
                removeCargo(payload);
                this.emitChange();
                break;
        }
    });
}

export default new Store();

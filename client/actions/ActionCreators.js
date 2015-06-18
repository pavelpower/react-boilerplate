import Actions from 'constants/Actions';
import Dispatcher from 'core/Dispatcher';

var ActionCreators = {
    saveState() {
        Dispatcher.dispatch({
            type: Actions.SAVE_STATE
        });
    },

    loadState() {
        Dispatcher.dispatch({
            type: Actions.LOAD_STATE
        });
    },

    selectCategory(id) {
        Dispatcher.dispatch({
            type: Actions.SELECT_CATEGORY,
            payload: id
        })
    },

    startCargoEditing(cargoId) {
        Dispatcher.dispatch({
            type: Actions.START_CARGO_EDITING,
            payload: cargoId
        });
    },

    stopCargoEditing() {
        Dispatcher.dispatch({
            type: Actions.STOP_CARGO_EDITING
        });
    },

    cancelCargoEditing() {
        Dispatcher.dispatch({
            type: Actions.CANCEL_CARGO_EDITING
        });
    },

    updateEditingCargo(key, value) {
        Dispatcher.dispatch({
            type: Actions.UPDATE_EDITING_CARGO,
            payload: {key, value}
        });
    },

    addCargo(cargoId) {
        Dispatcher.dispatch({
            type: Actions.ADD_CARGO,
            payload: cargoId
        })
    },

    removeCargo(cargoId) {
        Dispatcher.dispatch({
            type: Actions.REMOVE_CARGO,
            payload: cargoId
        })
    }
};

export default ActionCreators;

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

    },

    stopCargoEditing() {
        Dispatcher.dispatch({
            type: Actions.STOP_CARGO_EDITING
        });
    },

    updateCargo(cargoId, data) {

    }
};

export default ActionCreators;

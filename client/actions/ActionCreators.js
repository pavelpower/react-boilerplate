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

    setName(name) {
        Dispatcher.dispatch({
            type: Actions.SET_NAME,
            payload: name
        })
    },

    selectCategory(id) {
        Dispatcher.dispatch({
            type: Actions.SELECT_CATEGORY,
            payload: id
        })
    }
};

export default ActionCreators;

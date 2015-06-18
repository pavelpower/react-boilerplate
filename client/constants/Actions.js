import keyMirror from 'react/lib/keyMirror';

const Actions = keyMirror({

    LOAD_STATE: null,
    SAVE_STATE: null,

    SET_NAME: null,
    SELECT_CATEGORY: null,

    UPDATE_FIELD: null,
    START_CARGO_EDITING: null,
    STOP_CARGO_EDITING: null,
    CANCEL_CARGO_EDITING: null,
    UPDATE_EDITING_CARGO: null,

    ADD_CARGO: null,
    REMOVE_CARGO: null

});

export default Actions;

import React from 'react';
import ActionCreators from 'actions/ActionCreators';

import './StateControls.less';

class StateControls extends React.Component {
    render() {
        return (
            <div className="StateControls">
                <button onClick={this._saveState}>Сохранить состояние</button>
                <button onClick={this._loadState}>Загрузить состояние</button>
            </div>
        )
    }

    _saveState = () => {
        ActionCreators.saveState();
    }

    _loadState() {
        ActionCreators.loadState();
    }
}

export default StateControls;

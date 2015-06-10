import React from 'react';

import './Cargo.less';

class Cargo extends React.Component {

    render() {
        return (
            <div className="Cargo">
                <div className="Cargo-controls">
                    <button type="button" className="Cargo-edit">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button type="button" className="Cargo-remove">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
                {this.props.id} — {this.props.name}
            </div>
        )
    }

}

export default Cargo;

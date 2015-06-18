import React from 'react';
import ActionCreators from 'actions/ActionCreators';

import './Cargo.less';

class Cargo extends React.Component {

    render() {
        return (
            <div className="Cargo">
                <div className="Cargo-controls">
                    <button className="Cargo-edit"
                            type="button"
                            onClick={this._onEditClick}>
                        <span className="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button type="button" className="Cargo-remove"
                        onClick={this._onRemoveClick}>
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
                {this.props.id}. {this.props.name}<br />
                {Object.keys(this.props.properties).map((key) => {
                    var property = this.props.properties[key];
                    return <div key={key}><small key={key}>{property.name}: <b>{property.value}</b></small></div>;
                })}
            </div>
        )
    }

    _onEditClick = () => {
        //this.props.onEdit();
        ActionCreators.startCargoEditing(this.props.id);
    }

    _onRemoveClick = () => {
        ActionCreators.removeCargo(this.props.id);
    }
}

export default Cargo;

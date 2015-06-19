import React, {PropTypes} from 'react';
import ActionCreators from 'actions/ActionCreators';
import {CargoType} from 'types';

import './Cargo.less';

class Cargo extends React.Component {

    static propTypes = {
        cargo: PropTypes.instanceOf(CargoType)
    }

    render() {
        var cargo = this.props.cargo;
        console.log('========');
        console.log(this.props.cargo);
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
                {this.props.id}. {cargo.get('name')}<br />
                {cargo.get('properties').toArray().map((property, key) => {
                    // var property = cargo.properties[key];
                    return <div key={key}><small key={key}>{property.get('name')}: <b>{property.get('value')}</b></small></div>;
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

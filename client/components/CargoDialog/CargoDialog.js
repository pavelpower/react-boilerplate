import React, {PropTypes} from 'react';
import Dialog from 'components/Dialog';
import Controls from 'components/Controls';
import ActionCreators from 'actions/ActionCreators';


import {parseCargo} from 'core/parsers';

class CargoDialog extends React.Component {

    static propTypes = {
        cargo: PropTypes.object
    }

    render() {
        var cargo = this.props.cargo;
        if (typeof this.props.cargo.get !== 'function') {
            var content = Object.keys(cargo.properties).map((key) => {
                var property = cargo.properties[key]
                return (
                    <Controls
                        {...property}
                        key={property.id}
                        onChange={this._onPropertyChange.bind(this, property.id)} />
                )
            });
        } else {
            var content = cargo.properties.map((property, key) => {
                return (
                    <Controls
                        {...property.toJS()}
                        key={property.id}
                        onChange={this._onPropertyChange.bind(this, property.id)} />
                )
            });
        }

        // var content = cargo.properties.map((property, key) => {
        //     return (
        //         <Controls
        //             {...property.toJS()}
        //             key={property.id}
        //             onChange={this._onPropertyChange.bind(this, property.id)} />
        //     )
        // });

        return (
            <div className='CargoDialog'>
                <Dialog
                    title="Редактирование груза"
                    content={content}
                    onSave={this._onDialogSave}
                    onClose={this._onDialogClose} />
            </div>
        )
    }

    _onPropertyChange(key, event) {
        ActionCreators.updateEditingCargo(key, event.target.value);
    }

    _onDialogClose = () => {
        ActionCreators.cancelCargoEditing();
    }

    _onDialogSave = () => {
        ActionCreators.stopCargoEditing();
    }

}

export default CargoDialog;

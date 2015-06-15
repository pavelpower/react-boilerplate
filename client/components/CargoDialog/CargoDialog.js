import React, {PropTypes} from 'react';
import Dialog from 'components/Dialog';
import Controls from 'components/Controls';
import ActionCreators from 'actions/ActionCreators';

class CargoDialog extends React.Component {

    static propTypes = {
        cargo: PropTypes.object
    }

    render() {
        var content = this.props.cargo.properties.map((property) => {
            return (
                <Controls
                    {...property}
                    key={property.id}
                    onChange={this._onPropertyChange.bind(this, property.id)} />
            )
        });

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
        console.log('prop chacnges', key, event.target.value)
    }

    _onDialogClose = () => {
        ActionCreators.stopCargoEditing();
    }

    _onDialogSave = () => {
        ActionCreators.updateCargo();
        ActionCreators.stopCargoEditing();
    }

}

export default CargoDialog;

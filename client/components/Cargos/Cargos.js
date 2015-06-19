import React from 'react';
import Cargo from 'components/Cargo';
import ActionCreators from 'actions/ActionCreators';

import './Cargos.less';

class Cargos extends React.Component {

    render() {
        var allCargos = this.props.cargos.map((cargo, key) => {
            return <Cargo cargo={cargo} key={key} id={key} />
        });

        return (
            <div className="Cargos">
                <div className="Cargos-add">

                </div>
                <div className="Cargos-list">
                    <div className="panel-heading">
                        <h3 className="panel-title">Грузы</h3>
                    </div>
                    <div className="panel-body">
                        {allCargos}
                    </div>
                </div>
            </div>
        );
    }

    _onCargoEdit(cargo) {
        ActionCreators.startCargoEditing(cargo);
    }

}

export default Cargos;

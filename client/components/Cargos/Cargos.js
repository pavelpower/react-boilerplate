import React from 'react';
import Cargo from 'components/Cargo';

import './Cargos.less';

class Cargos extends React.Component {

    render() {
        // var allCargos = this.props.cargos
        return (
            <div className="Cargos">
                <div className="Cargos-add">

                </div>
                <div className="Cargos-list">
                    <div className="panel-heading">
                        <h3 className="panel-title">Грузы</h3>
                    </div>
                    <div className="panel-body">
                        {this.props.cargos.map((cargo, key) => <Cargo {...cargo} key={key} />)}
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                <div elem="add">sdfsdjf</div>
            </div>
        )
    }

}

export default Cargos;

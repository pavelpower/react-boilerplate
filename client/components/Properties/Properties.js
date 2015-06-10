import React from 'react';
import Property from 'components/Property';

import './Properties.less';

class Properties extends React.Component {

    render() {
        var allProperties = this.props.properties.map((property, key) => {
            return <Property {...property} key={key} />
        });

        return (
            <div className="Properties panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Параметры перевозки</h3>
                </div>
                <div className="panel-body">
                    {allProperties}
                </div>
            </div>
        )
    }

}

export default Properties;

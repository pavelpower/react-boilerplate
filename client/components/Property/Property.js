import React, { PropTypes } from 'react';
import Control from 'components/Controls';

class Property extends React.Component {

    render() {
        return (
            <div className="Property">
                <Control
                    {...this.props}
                    onChange={this._onChange} />
            </div>
        )
    }

    _onChange = () => {

    }

}

export default Property;

import React from 'react';
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
        console.log('NANANA');
    }

}

export default Property;

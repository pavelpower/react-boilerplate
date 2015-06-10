import React from 'react';

class Property extends React.Component {

    render() {
        return (
            <div className="Property">
                {this.props.id} — {this.props.label}
            </div>
        )
    }

}

export default Property;

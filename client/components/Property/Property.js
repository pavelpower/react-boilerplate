import React from 'react';

import TextControl from 'components/TextControl';
import CheckboxControl from 'components/CheckboxControl';

function controlFactory(type) {
    var Control;
    switch (type) {
        case 'text':
            Control = TextControl;
            break;
        case 'checkbox':
            Control = CheckboxControl;
            break;
    }
    if (Control) {
        return Control;
    } else {
        throw new Error(`Unknown conrol type "${type}".`);
    }
}

class Property extends React.Component {

    render() {
        var Control = controlFactory(this.props.type);
        return (
            <div className="Property">
                <Control />
                {JSON.stringify(this.props)}
                {this.props.id} — {this.props.label}
            </div>
        )
    }

}

export default Property;

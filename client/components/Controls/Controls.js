import React from 'react';

import TextControl from 'components/TextControl';
import TextareaControl from 'components/TextareaControl';
import CheckboxControl from 'components/CheckboxControl';
import RadioControl from 'components/RadioControl';

class Control extends React.Component {
    constructor(props) {
        super(props);

        switch (props.type) {
            case 'text':
                this.ControlClass = TextControl;
                break;
            case 'textarea':
                this.ControlClass = TextareaControl;
                break;
            case 'checkbox':
                this.ControlClass = CheckboxControl;
                break;
            case 'radio':
                this.ControlClass = RadioControl;
                break;
            default:
                throw new Error(`Unknown conrol type "${props.type}".`);
        }
    }

    render() {
        return <this.ControlClass {...this.props} label={this.props.name || this.props.label} />;
    }
}

export default Control

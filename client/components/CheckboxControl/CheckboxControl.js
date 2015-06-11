import React from 'react';

import './CheckboxControl.less';

class CheckboxControl extends React.Component {

    defaultProps = {
        label: '',
        onChange: function() {}
    }

    render() {
        return (
            <div className="CheckboxControl checkbox">
                <label>
                    <input type="checkbox"
                        onChange={this.props.onChange} />
                    {this.props.label}
                </label>
            </div>
        )
    }

}

export default CheckboxControl;

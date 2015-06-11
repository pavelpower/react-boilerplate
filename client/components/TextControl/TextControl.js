import React, {PropTypes} from 'react';

import './TextControl.less';

class TextControl extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        onChange: function() {}
    }

    render() {
        return (
            <div className="TextControl form-group">
                <label htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                <input className="form-control"
                       id={this.props.id}
                       type="text"
                       placeholder={this.props.placeholder}
                       onChange={this.props.onChange} />
            </div>
        )
    }

}

export default TextControl;

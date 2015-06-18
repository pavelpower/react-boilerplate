import React, {PropTypes} from 'react';

import './TextareaControl.less';

class TextareaControl extends React.Component {

    static propTypes = {
        rows: PropTypes.number,
        placeholder: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        rows: 3,
        onChange: function() {}
    }

    render() {
        return (
            <div className="TextareaControl form-group">
                <label htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                <textarea className="form-control"
                       id={this.props.id}
                       rows={this.props.rows}
                      defaultValue={this.props.value}
                       placeholder={this.props.placeholder}
                       onChange={this.props.onChange} />
            </div>
        )
    }

}

export default TextareaControl;

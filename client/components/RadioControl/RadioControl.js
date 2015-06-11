import React, {PropTypes} from 'react';

import './RadioControl.less';

class RadioControl extends React.Component {

    static propTypes = {
        rows: PropTypes.number,
        label: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func
    }

    static defaultProps = {
        onChange: function() {}
    }

    render() {
        return (
            <div className="RadioControl form-group">
                <label>{this.props.label}</label>
                <div className="btn-group btn-block"
                     data-toggle="buttons">
                    {this.props.options.map((option) => {
                        return (
                            <label className="btn btn-default"
                                key={option.value}>
                                <input type="radio"
                                    name={this.props.id}
                                    value={option.value}
                                    autoComplete="off" />
                                    {option.label}
                            </label>
                        );
                    })}
                </div>
            </div>
        )
    }

}

export default RadioControl;

import React from 'react';

import ActionCreators from 'actions/ActionCreators';

import './Subcategory.less';

class Subcategory extends React.Component {

    render() {
        return (
            <div className='Subcategory'
                onClick={this._onClick}>
                <span className="Subcategory-icon" />
                {this.props.name}
            </div>
        );
    }

    _onClick = () => {
        // ActionCreators.selectCategory(this.props.id);
    }

}

export default Subcategory;

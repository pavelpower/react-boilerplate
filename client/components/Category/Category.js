import React from 'react';

import ActionCreators from 'actions/ActionCreators';

import './Category.less';

class Category extends React.Component {
    render() {
        return (
            <div className='Category'
                onClick={this._onClick}>
                <span className="Category-icon" />
                {this.props.name}
            </div>
        );
    }

    _onClick = () => {
        ActionCreators.selectCategory(this.props.id);
    }
}

export default Category;

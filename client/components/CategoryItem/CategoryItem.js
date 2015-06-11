import React from 'react';
import {addons} from 'react/addons';

import ActionCreators from 'actions/ActionCreators';

import './CategoryItem.less';

class CategoryItem extends React.Component {
    shouldComponentUpdate() {
        return addons.PureRenderMixin.shouldComponentUpdate.call(this, arguments);
    }

    render() {
        return (
            <div className='CategoryItem'
                onClick={this._onClick}>
                <span className="CategoryItem-icon" />
                {this.props.name}
            </div>
        );
    }

    _onClick = () => {
        ActionCreators.selectCategory(this.props.id);
    }
}

export default CategoryItem;

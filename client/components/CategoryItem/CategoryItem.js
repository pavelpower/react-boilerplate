import React from 'react';
import {addons} from 'react/addons';

import ActionCreators from 'actions/ActionCreators';

console.log(addons.update)

class CategoryItem extends React.Component {
    shouldComponentUpdate(a, b, c) {
        return addons.PureRenderMixin.shouldComponentUpdate.call(this, arguments);
    }

    render() {
        return (
            <div className='Categories'
                onClick={this._onClick}>
                {this.props.name}
            </div>
        );
    }

    _onClick = () => {
        ActionCreators.selectCategory(this.props.id);
    }
}

export default CategoryItem;

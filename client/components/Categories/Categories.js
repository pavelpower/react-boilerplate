import React from 'react';
import Category from 'components/Category';

import './Categories.less';

class Categories extends React.Component {
    render() {
        var allCategories = Object.keys(this.props.categories).map((id) => {
            return (
                <div className="Categories-item" key={id}>
                    <Category {...this.props.categories[id]} />
                </div>
            );
        });

        return (
            <div className='Categories'>
                <h3>Что вы хотите перевезти?</h3>
                <div className='Categories-list'>
                    {allCategories}
                </div>
            </div>
        );
    }
}

export default Categories;

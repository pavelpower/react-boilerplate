import React from 'react';
import CategoryItem from 'components/CategoryItem';

import './Categories.less';

class Categories extends React.Component {
    render() {
        var allCategories = this.props.categories.map((category) => {
            return (
                <div className="Categories-item" key={category.id}>
                    <CategoryItem {...category} />
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

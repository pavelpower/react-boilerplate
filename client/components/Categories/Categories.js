import React from 'react';
import CategoryItem from 'components/CategoryItem';

import './Categories.less';

class Categories extends React.Component {
    render() {
        var allCategories = this.props.categories.map((category, key) => {
           return (<CategoryItem {...category} key={category.id}/>)
        });

        return (
            <div className='Categories'>
                <h3>Что вы хотите перевезти?</h3>
                <div className='Categories-types'>
                    {allCategories}
                </div>
            </div>
        );
    }
}

export default Categories;

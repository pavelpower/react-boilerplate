import React from 'react';
import Subcategory from 'components/Subcategory';

import './Subcategories.less';

class Subcategories extends React.Component {
    render() {
        var allSubcategories = this.props.categories.map((category) => {
            return (
                <div className="Subcategories-item" key={category.id}>
                    <Subcategory {...category} />
                </div>
            );
        });

        return (
            <div className="Subcategories">
                <h3>Добавьте груз</h3>
                <div className="Subcategories-list">
                    {allSubcategories}
                </div>
            </div>
        );
    }
}

export default Subcategories;

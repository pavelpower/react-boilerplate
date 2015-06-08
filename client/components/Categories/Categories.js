import React from 'react';
//import DeliveryType from '../DeliveryType';
//import {deliveryTypes} from '../../config';

import './Categories.less';

class Categories extends React.Component {
    render() {
        return (
            <div className='Categories'>
                <h3>Что вы хотите перевезти?</h3>
                <div className='Categories-types'>
                    Cargo Types
                    {/*deliveryTypes.map((delivery, i) => {
                        return <div className='Categories-type'
                                    key={i}>
                            <DeliveryType
                                delivery={delivery} />
                        </div>
                    })*/}
                </div>
            </div>
        );
    }
}

export default Categories;

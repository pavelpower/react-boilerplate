import React from 'react';
import StateControls from 'components/StateContorls/StateControls';

import './Header.less';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <StateControls />
                <h1>Заказ перевозки</h1>
            </div>
        )
    }
}

export default Header;

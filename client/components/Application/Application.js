import React from 'react';
import ActionCreators from 'actions/ActionCreators';
import ApplicationStore from 'stores/Store'

import Header from 'components/Header';
import Categories from 'components/Categories';
import Subcategories from 'components/Subcategories';
import Cargos from 'components/Cargos';
import Properties from 'components/Properties';

import './Application.less';

function getStateFromStore() {
    return ApplicationStore.getState();
}

class Application extends React.Component {

    state = getStateFromStore();

    componentDidMount() {
        ApplicationStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ApplicationStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div className="Application">
                <Header title="hello, world" />
                <Categories categories={this.state.categories} />
                <Subcategories categories={this.state.selectedCategory.cargos} />
                <Cargos cargos={this.state.cargos} />
                <Properties properties={this.state.properties} />
            </div>
        );
    }

    _onChange = () => {
        this.setState(ApplicationStore.getState());
    }
}

export default Application;

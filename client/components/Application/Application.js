import 'babel/polyfill';
import React from 'react';
import ActionCreators from 'actions/ActionCreators';
import ApplicationStore from 'stores/Store'
import StateStore from 'stores/StateStore'

import Header from 'components/Header';
import Categories from 'components/Categories';
import Subcategories from 'components/Subcategories';
import Cargos from 'components/Cargos';
import CargoDialog from 'components/CargoDialog';
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
        console.log(this.state);
        return (
            <div className="Application">
                <Header title="hello, world" />
                <Categories categories={this.state.categories} />
                {this.state.selectedCategory ?
                    <Subcategories categories={this.state.selectedCategory.cargos} /> : ''
                }

                {this.state.cargos.size > 0 ?
                    <Cargos cargos={this.state.cargos} /> : ''
                }

                <Properties properties={this.state.properties} />

                {this.state.editingCargo ?
                    <CargoDialog cargo={this.state.editingCargo} /> : ''
                }
            </div>
        );
    }

    _onChange = () => {
        var s = ApplicationStore.getState();
        console.log(s);
        this.setState(ApplicationStore.getState());
    }
}

export default Application;

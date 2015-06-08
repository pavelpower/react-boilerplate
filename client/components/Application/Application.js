import React from 'react';
import ActionCreators from 'actions/ActionCreators';
import ApplicationStore from 'stores/Store'

import Header from 'components/Header';
import Categories from 'components/Categories';

import './Application.less';

class Application extends React.Component {

    state = {
        name: 'Null'
    };

    componentDidMount() {
        ApplicationStore.addChangeListener(this._onChange);
        //document.addEventListener('keypress');
    }

    componentWillUnmount() {
        ApplicationStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div className="Application">
                <Header title={this.state.name} />
                <Categories />
                My name is: <b>{this.state.name}</b> -<br />
                <input type='text' onChange={this._onNameChange} />
            </div>
        );
    }

    _onChange = () => {
        this.setState(ApplicationStore.getState());
    }

    _onNameChange = (event) => {
        ActionCreators.setName(event.target.value);
        //this.setState({
        //    name: event.target.value
        //});
    }
}

export default Application;

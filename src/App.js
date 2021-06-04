import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './store';
import Product from './components/Product';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Product />
            </Provider>
        );
    }
}


export default App;

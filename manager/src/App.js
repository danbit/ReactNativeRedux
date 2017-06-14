import React, { Component } from 'react';
import { Container, StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
import getTheme from '../native-base-theme/components';  

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD_Bj1ZcPIaKSeKyQLMkNucgJtTwWJ3vx0',
            authDomain: 'manager-ae083.firebaseapp.com',
            databaseURL: 'https://manager-ae083.firebaseio.com',
            storageBucket: 'manager-ae083.appspot.com',
            messagingSenderId: '951045919404'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <StyleProvider style={getTheme()}>
                <Container>
                    <Provider store={store}>
                        <Router />
                    </Provider>
                 </Container>
            </StyleProvider>
        );        
    }
}

export default App;

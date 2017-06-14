import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';

const App = () =>
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
            <Header text="Tech Stack" />
            <LibraryList />
        </View> 
    </Provider>;        

export default App;

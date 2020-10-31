import React, {Component} from 'react';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'; 
import reducer from './reducer';
import LoginForm from './component/LoginForm'

class App extends Component {

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAXLrhWO38lAlbemfOMDRI17qtDQgwxSBo",
            authDomain: "staffmanagement-e5a36.firebaseapp.com",
            databaseURL: "https://staffmanagement-e5a36.firebaseio.com",
            projectId: "staffmanagement-e5a36",
            storageBucket: "staffmanagement-e5a36.appspot.com",
            messagingSenderId: "1083963196044",
            appId: "1:1083963196044:web:6f3d4128a5a89b416031a9"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render(){

        const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;
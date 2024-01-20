import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { FirebaseContext } from './store/Firebasecontext';
import firebase from './firebase/config'; //default export do need {}


ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <App />
</FirebaseContext.Provider>
,document.getElementById('root'));

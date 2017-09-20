import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import App from './app.js';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAYat3dRncLL5A8d-5pKABlZ7-fSSKntOQ',
  authDomain: 'splitterex.firebaseapp.com',
  databaseURL: 'https://splitterex.firebaseio.com',
  projectId: 'splitterex',
  storageBucket: 'splitterex.appspot.com',
  messagingSenderId: '1009921285806'
};
firebase.initializeApp(firebaseConfig);


const target = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, target);

import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAs7eNyt_Q6xkOyLo6Iuox1qrcMvqQZRCM',
  authDomain: 'todo-react-465d3.firebaseapp.com',
  databaseURL: 'https://todo-react-465d3.firebaseio.com',
});

const db = database(app);
const base = Rebase.createClass(db);

export default base;

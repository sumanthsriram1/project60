import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: 'AIzaSyD8F0ySVeK-B60m6I5O3H_Gv4dwCLisy_w',
  authDomain: 'project-60-73c9f.firebaseapp.com',
  databaseURL: 'https://project-60-73c9f-default-rtdb.firebaseio.com',
  projectId: 'project-60-73c9f',
  storageBucket: 'project-60-73c9f.appspot.com',
  messagingSenderId: '733822029621',
  appId: '1:733822029621:web:1ab20098156236d68b067c',
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();

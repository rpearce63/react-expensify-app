import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDfs-aWbyhTC3h2F_SHMv49QKyursqVC4I",
    authDomain: "expensify-470c4.firebaseapp.com",
    databaseURL: "https://expensify-470c4.firebaseio.com",
    projectId: "expensify-470c4",
    storageBucket: "expensify-470c4.appspot.com",
    messagingSenderId: "951761030092"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({
    name: 'Rick Pearce',
    age: 55,
    isSingle: false,
    location: {
        city: "Dallas",
        country: "United States"
    }
  });

  //database.ref().set('This is my data');
  database.ref('age').set(55);

  database.ref('location/city').set("Wylie");

  database.ref('attributes').set({
    height: 69,
    weight: 203
  });
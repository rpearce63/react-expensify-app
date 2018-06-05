import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

  // child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('child_added: ', snapshot.key, snapshot.val());
//   });

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             }); 
//         });
//         console.log(expenses);
//     });

    // database.ref('expenses').on('value', (snapshot) => {
    //     const expenses = [];

    //     snapshot.forEach(childSnapshot => {
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         }); 
    //     });
    //     console.log(expenses);
    // })

// database.ref('expenses').push({
//     description: 'Buy food',
//     note: 'Milk, eggs, cereal',
//     amount: 1236,
//     createdAt: 1000
// });





//   database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'Angular, React'
//   });   
//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
    
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//       console.log("Error fetching data: ", e);
//   });
    
//   setTimeout(() => {
//     database.ref().update({
//         name: 'Rick Pearce',
//         'job/title': 'churro seller',
//         'job/company': 'Disney World'
//     });
//   }, 3000);
  

  //database.ref().off();
  
//   const onValuechange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log("Error fetching data: ", e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(55);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValuechange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(60);
//   }, 10500);

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {

//     });

//   database.ref().set({
//     name: 'Rick Pearce',
//     age: 55,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'State Farm'
//     },
//     location: {
//         city: "Dallas",
//         country: "United States"
//     }
//   }).then(() => {
//       console.log('Data is saved.');
//   }).catch((e) => {
//     console.log('This failed.', e);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });

//   database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Remove succeeded.');
//     }).catch((e) => {
//         console.log('Remove failed: ', e.message);
//     });
  
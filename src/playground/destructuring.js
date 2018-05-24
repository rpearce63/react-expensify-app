// const person = {
//     name: "Rick",
//     age: 55,
//     location: {
//         city: "Dallas", 
//         temp: 72
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature } = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Cat in the Hat',
//     author: 'Dr Suess',
//     publisher: {
//         name: 'Simon and Shuster'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);


// Array destructuring

// const address = ['411 Foxwood Ln', 'Wylie', 'TX', '75098'];
// const [, city, state] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];

const [itemName,,mPrice] = item;

console.log(`A medium ${itemName} costs ${mPrice}`);
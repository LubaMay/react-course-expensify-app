// Object destructuring


// const person = {
//     name: 'Lubov',
//     age: 34,
//     location: {
//         city: 'Santa Clara', 
//         temp: 68
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Maybe You Should Talk to Someone',
//     author: 'Lori Gottlieb',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// Array destructuring

// const address = ['444 Saratoga ave', 'Santa Clara', 'CA', '95050'];

// const [, city, state = 'California'] = address;


// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
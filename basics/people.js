const people = ['saim', 'mohtashim', 'hamza'];
const age = [23, 21, 10];

// console.log(people);

// export single
// module.exports = people;

// export multiples
module.exports = {
    people, age
   
    // we can export like this
    // people: people,
    // age: age

}
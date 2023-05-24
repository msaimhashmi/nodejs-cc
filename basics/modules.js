// MODULES & REQUIRE

// We don't write all code in a single file. For reusability, we need to create multiple files for multiple purposes so then we need to require.
//by default require the file not to have access to get data inside the file which is required. To access that data we need to manually export data from inside the required file through the module.

// const xyz = require('./people');

// Best way to import different things from the different files is to use destructuring. Like we want to import only people from the people.js file so here we only access people's property. const {people, age} = require('./people');

// console.log(xyz);
console.log(people, age);


// nodejs have built-in own core modules that we can use/require those as well for added functionality. OS is one of them.
const os = require('os');
console.log(os.platform(), os.homedir());
// GLOBAL OBJECT

// In client-side JavaScript running inside a web browser, the global object is indeed the window object. It provides access to the browser's Document Object Model (DOM), which represents the web page structure and allows manipulation of its elements, such as adding or removing elements, changing their content, or modifying their styles.
// On the other hand, in Node.js, the global object is called global. It serves as the global scope for Node.js modules and provides various methods and properties that are specific to the Node.js runtime environment.

// While both window and global objects have some similarities and provide certain global functionality, there are differences between them:
// DOM methods: As you correctly mentioned, the window object in the browser provides access to numerous methods and properties related to the DOM, such as document, querySelector, addEventListener, etc. These DOM-specific features are not available in the Node.js global object because Node.js does not have a DOM by default.
// Node.js-specific features: The global object in Node.js provides additional features and methods specific to the Node.js runtime environment. For example, it includes require to load modules, process for interacting with the running process, console for logging, and setTimeout for scheduling code execution.

global.setTimeout(() => {
    console.log('tick tick timeout!');
    clearInterval(interval);
}, 3000);

// interval used to run process continuosly
const interval = global.setInterval(() => {
    console.log('tik tok');
},1000);

console.log(__dirname);
console.log(__filename);
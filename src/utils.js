console.log('Utils.js is running');

const square = (x) => x * x;
const add = (a,b) => a + b;

// const subtract = (a, b) => a - b;
export default (a, b) => a - b;
// export const add = (a,b) => a + b; //does the same thing as the export declaration below 

//exports - default export - named exports
export { square, add };

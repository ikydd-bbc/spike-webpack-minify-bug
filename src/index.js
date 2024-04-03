// this needs to be an import (require seems to work fine)
import data from './data.json';

// this works ...
console.log(data.foo.bar)

// ...but bar does not destructure correctly ... 
const { bar } = data.foo;

// ... so the const is undefined
if (typeof bar === 'undefined') {
  throw Error('bar was undefined');
}

// if we add this though then it works properly:

console.log(bar);
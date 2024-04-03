// this needs to be an import (require seems to work fine)
import data from './data.json';

// bar does not destructure correctly ... 
const { bar } = data.foo;

// ... so the const is undefined
if (typeof bar === 'undefined') {
  throw Error('bar was undefined');
}

console.log(bar);
// this needs to be an import (require seems to work fine)
import data from './data.json';

// bar does not destructure correctly ... 
const { bar } = data.foo[0];

// ... so the map errors
const out = bar.map(item => item);

console.log(out);
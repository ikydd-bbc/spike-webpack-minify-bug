import data from './data.json';

const { bar } = data.foo[0];

const out = bar.map(item => item);

console.log(out);
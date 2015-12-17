var borda = require('./borda'),
	complend = require('./complend'),
	parallel = require('./parallel-exclusion');
var obj = [
    [5,"c","d","a","b"],
    [4,"b","a","d","c"],
    [2,"a","b","c","d"]
];

console.log(borda(obj), complend(obj), parallel(obj, ['a','b','c','d']));
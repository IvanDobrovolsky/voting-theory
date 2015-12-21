"use strict";

const BordaMethod = require('./methods/borda'),
	ComplendMethod = require('./methods/complend'),
    ParallelExclusionMethod = require('./methods/parallel-exclusion');

let table = [
    [5,"c","d","a","b"],
    [4,"b","a","d","c"],
    [2,"a","b","c","d"]
];


let borda = new BordaMethod();
let parallelExlusion = new ParallelExclusionMethod();
let complend = new ComplendMethod();


console.log("Borda method: " + JSON.stringify(borda.calculate(table)) + "\n");
console.log("Complend method: " + JSON.stringify(complend.calculate(table)) + "\n");
console.log("Parallel method: " + parallelExlusion.calculate(table)+ "\n");

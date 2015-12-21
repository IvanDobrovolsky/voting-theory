"use strict";
//Additional function helpers

const _ = require('lodash');

module.exports = {};

module.exports.getCandidates = function (table) {

	let result = [];
    for(let item of table){
        result = result.concat(item.slice(1));
    }
	return _.uniq(result);
};

module.exports.getPairs = function (arr, cb) {
    let pairs = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            cb([arr[i], arr[j+1]]);
        }
    }

};

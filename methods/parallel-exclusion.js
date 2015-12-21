"use strict";

const _ = require('lodash'),
	utils = require('./../utils');

/**
 Parallel exclusion algorithm
 * @param  {[type]} obj 
 * let table = [
    [5,"c","d","a","b"],
    [4,"b","a","d","c"],
    [2,"a","b","c","d"]
];]
 */

class ParallelExclusionMethod{

	calculate(table, order){

		order = order || utils.getCandidates(table);

		let testWin = function (a, b) {
			let resultA = 0, resultB = 0;
            for(let item of table){
                if (item.indexOf(a) > item.indexOf(b)) resultA += item[0];
                else resultB++;
            }
			return resultA > resultB ? 1 : resultA == resultB ? 0 : -1;
		};

		let tmpResultWin = 0;
		while (order.length > 1 && tmpResultWin !== 0) {
			_.chunk(order, 2).filter(function (item) {
				return item.length == 2;
			}).forEach(function (pair) {
				tmpResultWin = testWin(pair[0], pair[1]);

				if (tmpResultWin == 1) {
					order = _.without(order, pair[1]);
				} else if (tmpResultWin == -1) {
					order = _.without(order, pair[0]);
				}

			});
		}

		return order;

	}
}

module.exports = ParallelExclusionMethod;
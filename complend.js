var _ = require('lodash'),
	utils = require('./utils');

/**
 Bord count algorithm
 * @param  {[type]} obj 
 * var obj = [
    [5,"c","d","a","b"],
    [4,"b","a","d","c"],
    [2,"a","b","c","d"]
];]
 */

module.exports = function (obj)  {
	var candiates = utils.getCandidates(obj);
	var results = {};
	candiates.forEach(function (item) {
		results[item] = 0;
	});

	var testWin = function (a, b) {
		var resultA = 0, resultB = 0;
		obj.forEach(function (item) {
			if (item.indexOf(a) < item.indexOf(b)) resultA++;
			else resultB++;
		});
		return resultA > resultB ? 1 : (resultA == resultB ? 0 : -1);
	};
	var tmpResult;
	utils.getPairs(candiates, function (pair) {
		tmpResult = testWin(pair[0],pair[1]);
		results[pair[0]] += tmpResult;
		results[pair[1]] -= tmpResult;
	});
	return results;
};
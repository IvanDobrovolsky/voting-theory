"use strict";
/**
 Bord count algorithm
 * @param  {[type]} obj 
 * let table = [
    [5,"c","d","a","b"],
    [4,"b","a","d","c"],
    [2,"a","b","c","d"]
];]
 */

//Borda Method implementation
class BordaMethod{

	calculate(table){

		let results = {}, multiplier = 0, length = 0;

		for (let item of table) {
			multiplier = item[0];
			length = item.length - 2;

			item.slice(1).forEach(function (candidate, i) {
				results[candidate] = results[candidate] || 0;
				results[candidate] += (length - i) * multiplier;
			});
		}

		return results;
	}
}

module.exports = BordaMethod;
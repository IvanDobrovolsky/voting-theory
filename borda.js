/**
 Bord count algorithm
 * @param  {[type]} obj 
 * var obj = [
    [5,"c","d","a","b"],
    [4,"b","a","d","c"],
    [2,"a","b","c","d"]
];]
 */
module.exports = function (obj) {
	var results = {};
	var multiplier = null,
		length = null;
	obj.forEach(function (item) {
		multiplier = item[0];
		// console.log(item.length);
		length = item.length - 2;
		item.slice(1).forEach(function (candiate, i) {
			results[candiate] = results[candiate] || 0;
			results[candiate] += (length - i) * multiplier;
		});
	});
	return results;
};
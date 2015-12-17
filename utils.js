var _ = require('lodash');

module.exports = {};
module.exports.getCandidates = function (obj) {
	var result = [];
	obj.forEach(function (item) {
		result = result.concat(item.slice(1));
	});
	return _.uniq(result);
};
module.exports.getPairs = function (arr, cb) {
    var pairs = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i; j < arr.length - 1; j++) {
            cb([arr[i], arr[j+1]]);
        }
    }
};


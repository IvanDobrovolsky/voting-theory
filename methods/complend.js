"use strict";

const _ = require('lodash'),
	utils = require('./../utils');

/**
 Bord count algorithm
 * @param  {[type]} obj 
 * let table = [
    [5,"c","d","a","b"],
    [4,"b","a","d","c"],
    [2,"a","b","c","d"]
];]
 */

class ComplendMethod{

    calculate(table){

        let candidates = utils.getCandidates(table), results = {};

        for(let candidate of candidates){
            results[candidate] = 0;
        }

        let testWin = function (a, b) {

            let resultA = 0, resultB = 0;

            for(let item of table){
                if (item.indexOf(a) < item.indexOf(b)) resultA++;
                else resultB++;
            }

            return resultA > resultB ? 1 : (resultA == resultB ? 0 : -1);
        };

        var tmpResult;

        utils.getPairs(candidates, function (pair) {
            tmpResult = testWin(pair[0], pair[1]);
            results[pair[0]] += tmpResult;
            results[pair[1]] -= tmpResult;
        });

        return results;
    }
}

module.exports = ComplendMethod;
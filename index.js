'use strict';
// Array of objects
var arr = [
  {
    name: 'Three',
    ranking: 3
  },
  {
    name: 'Five',
    ranking: 5
  },
  {
    name: 'Four',
    ranking: 4
  },
  {
    name: 'One',
    ranking: 1
  },
  {
    name: 'Two',
    ranking: 2
  }
];

/**
 * Non ES6 version to sort
 * array by ranking asc
 * @Param <boolean> true for asc order false for desc order
 * @returns <[Object]> Array of objects ordered in asc order
 */
function orderByRanking (asc) {
  if (!arr) return;
  return arr.sort(function (a, b) {
    return (asc) ? a.ranking - b.ranking : b.ranking - a.ranking;
  });
}

/**
 * ES6 version to sort
 * array by ranking
 * @Param <boolean> true for asc order false for desc order
 * @returns <[Object]> Array of objects ordered in asc order
 */
function orderByRankingES6 (asc) {
  if (!arr) return;
  return (asc) ? arr.sort((a,b) => a.ranking - b.ranking) : arr.sort((a,b) => b.ranking - a.ranking);
}

/**
 * Non ES6 version to calculate
 * average ranking
 * @returns <Integer> avgRanking Average ranking
 */
function averageRanking () {
  if (!arr) return;
  var avgRanking = 0;
  arr.forEach(function (item) {
    avgRanking += item.ranking;
  });
  return avgRanking / arr.length;
}

/**
 * ES6 version to calculate
 * average ranking
 * @returns <Integer> avgRanking Average ranking
 */
function averageRankingES6 () {
  if (!arr) return;
  var avgRanking = 0;
  arr.forEach(item => avgRanking += item.ranking);
  return avgRanking / arr.length;
}

module.exports.orderByRanking = orderByRanking;
module.exports.orderByRankingES6 = orderByRankingES6;
module.exports.averageRanking = averageRanking;
module.exports.averageRankingES6 = averageRankingES6;

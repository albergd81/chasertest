var index = require('../index');
const assert = require('assert');

describe('It should test the functionality implemented', function () {
  it('Should order the array in asc order using Non ES6 function', () => {
    var result = index.orderByRanking(true);
    assert(result !== null);
    assert(result.length === 5);
    assert(result[0].ranking === 1);
  });

  it('Should order the array in desc order using Non ES6 function', () => {
    var result = index.orderByRanking(false);
    assert(result !== null);
    assert(result.length === 5);
    assert(result[0].ranking === 5);
  });

  it('Should order the array in asc order using ES6 function', () => {
    var result = index.orderByRankingES6(true);
    assert(result !== null);
    assert(result.length === 5);
    assert(result[0].ranking === 1);
  });

  it('Should order the array in desc order using ES6 function', () => {
    var result = index.orderByRankingES6(false);
    assert(result !== null);
    assert(result.length === 5);
    assert(result[0].ranking === 5);
  });

  it('Should get the average ranking using Non ES6 function', () => {
    var result = index.averageRanking();
    assert(result !== null);
    assert(result === 3);
  });

  it('Should get the average ranking using ES6 function', () => {
    var result = index.averageRankingES6();
    assert(result !== null);
    assert(result === 3);
  });
});

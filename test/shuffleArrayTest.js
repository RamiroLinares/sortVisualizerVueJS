import {assert, expect} from 'chai';
import shuffleArray from '../src/algorithms/shuffleArray.mjs';

describe('Shuffle Array',function(){
    it('Takes an array and mixes the order of its elements',function(){
        let testArray = [1,2,3,4,5,6,7,8,9,10];
        console.log(shuffleArray(testArray));
        assert.ok(shuffleArray([1,2,3,4,5,6,7,8,9,10]));
    });
});
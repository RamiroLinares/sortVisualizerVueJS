import {assert, expect} from 'chai';
import bubblesort from '../src/algorithms/bubblesort.js';

describe('Bubble Sort',function(){
    it('Algorithm should return array elements in order',function(){
        let testArray=[10,6,7,5,3,4,8,9,2,1];
        expect(bubblesort(testArray)).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
    });
});
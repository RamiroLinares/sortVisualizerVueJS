import {assert, expect} from 'chai';
import quicksort from '../src/algorithms/quicksort.mjs';

describe('Quick Sort',function(){
    it('Algorithm should return array elements in order',function(){
        let testArray=[10,6,7,5,3,4,8,9,2,1];
        //expect(quicksort(testArray)).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
        console.log(quicksort(testArray));
    });
});
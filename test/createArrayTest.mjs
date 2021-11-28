import {assert, expect} from 'chai';
import createArray from '../src/algorithms/createArray.mjs';

describe('Create Array',function(){
    it('Creates an array from 1 to a user defined n',function(){
        
        expect(createArray(10)).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
    });
});
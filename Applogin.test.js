const Applogin = require('./Applogin');
const assert = require('assert');


describe('positive()',function(){
    test('postivetest',() =>{
    
        let result1 = Applogin('admin','admin');
        console.log(result1);
        assert.equal(result1 , true);
    });

});



// test('negativetest',() =>{
    
//     let result = Applogin('1admin','1admin');
//     console.log(result);
//     assert.equal(result , false);
// });

// test('negativetest1',() =>{
    
//     let result = Applogin('1admin','admin ');
//     console.log(result);
//     assert.equal(result , false);
// });

// test('negativetest2',() =>{
    
//     let result = Applogin('admin','1admin ');
//     console.log(result);
//     assert.equal(result , false);
// });

// test('negativetest3',() =>{
    
//     let result = Applogin(' ','  ');
//     console.log(result);
//     assert.equal(result , false);
// });
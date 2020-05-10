describe('is Odd or Even behavior', function () {    

    it('check the type of input - Boolean case', () => {
        let result = isOddOrEven(false);

        assert.equal(result, undefined,'The result is not undefined'); 
    });

    it('check the type of input - Number case', () => {
        let result = isOddOrEven(15);

        assert.equal(result, undefined,'The result is not undefined'); 
    });

    it('Check the string - even case', () => {
        let result = isOddOrEven('test');

        assert.equal(result, 'even','The result should be even'); 
    });

    it('Check the string - odd case', () => {
        let result = isOddOrEven('tests');

        assert.equal(result, 'odd','The result should be odd'); 
    });


    it('', () => {

    });
});
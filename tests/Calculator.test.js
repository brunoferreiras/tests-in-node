import chai from 'chai';
import Calculator from '../src/Calculator';

const expect = chai.expect;

describe('Calculator class', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('(SUM) expect 5 + 4 = 9', () => {
        const result = calculator.sum(5, 4);

        expect(result).to.equal(9);
        expect(result).to.be.an('number');
    });

    it('(MINUS) expect 5 - 2 = 3', () => {
        const result = calculator.minus(5, 2);

        expect(result).to.equal(3);
        expect(result).to.be.an('number');
        expect(result).to.not.equal(100);
    });

    it('(MULT) expect 2 * 2 = 4', () => {
        const result = calculator.mult(2, 2);

        expect(result).to.equal(4);
        expect(result).to.be.an('number');
    });

    it('(DIV) expect 10 / 5 = 2', () => {
        const result = calculator.div(10, 5);

        expect(result).to.equal(2);
        expect(result).to.be.an('number');
    });
});

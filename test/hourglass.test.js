const {getTotal} = require("../src/hourglass");

describe("get the max hourglass sum", () => {
    test('misc', () => {
        expect(getTotal([[1,1,1,0,0,0], [0,1,0,0,0,0], [1,1,1,0,0,0], [0,0,2,4,4,0], [0,0,0,2,0,0], [0,0,1,2,4,0]])).toBe(19);
    });
});
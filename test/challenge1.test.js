const {countPositions} = require("../src/challenge1");

describe("positions counter to get a word", () => {
    test('misc', () => {
        expect(countPositions('code')).toBe(14);
        expect(countPositions("does")).toBe(16);
        expect(countPositions("your")).toBe(23);
        expect(countPositions("solution")).toBe(33);
        expect(countPositions("work")).toBe(20);
        expect(countPositions("for")).toBe(12);
        expect(countPositions("these")).toBe(27);
        expect(countPositions("words")).toBe(25);
    });
});

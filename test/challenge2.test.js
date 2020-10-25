const {countPositions} = require("../src/challenge2");

describe("positions counter to get a word including shift and space", () => {

    test("Mixed", () => {
        expect(countPositions("Code Wars")).toBe(69);
    });

    test("Lower", () => {
        expect(countPositions("does")).toBe(16);
        expect(countPositions("your")).toBe(23);
        expect(countPositions("solution")).toBe(33);
        expect(countPositions("work")).toBe(20);
        expect(countPositions("for")).toBe(12);
        expect(countPositions("these")).toBe(27)
        expect(countPositions("words")).toBe(25)
    });

    test("Upper", () => {
        expect(countPositions("DOES")).toBe(27);
        expect(countPositions("YOUR")).toBe(26);
        expect(countPositions("SOLUTION")).toBe(38);
        expect(countPositions("WORK")).toBe(23);
        expect(countPositions("FOR")).toBe(21);
        expect(countPositions("THESE")).toBe(32);
        expect(countPositions("WORDS")).toBe(28);
    });

    test("Capitalized", () => {
        expect(countPositions("Does")).toBe(40);
        expect(countPositions("Your")).toBe(37);
        expect(countPositions("Solution")).toBe(49);
        expect(countPositions("Work")).toBe(30);
        expect(countPositions("For")).toBe(28);
        expect(countPositions("These")).toBe(41);
        expect(countPositions("Words")).toBe(35);
    });
});

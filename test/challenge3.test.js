const {countPositions} = require("../src/challenge3");

describe("positions counter to get a word, wrap is allowed", () => {

    test("example", () => {
        expect(countPositions("Code Wars")).toBe(49);
    });

    test("lower", () => {
        expect(countPositions("does")).toBe(16);
        expect(countPositions("your")).toBe(21);
        expect(countPositions("solution")).toBe(33);
        expect(countPositions("work")).toBe(18);
        expect(countPositions("for")).toBe(12);
        expect(countPositions("these")).toBe(27);
        expect(countPositions("words")).toBe(23);
    });

    test("upper", () => {
        expect(countPositions("DOES")).toBe(19);
        expect(countPositions("YOUR")).toBe(22);
        expect(countPositions("SOLUTION")).toBe(34);
        expect(countPositions("WORK")).toBe(19);
        expect(countPositions("FOR")).toBe(15);
        expect(countPositions("THESE")).toBe(28);
        expect(countPositions("WORDS")).toBe(24);
    });

    test("mixed", () => {
        expect(countPositions("Does")).toBe(28);
        expect(countPositions("Your")).toBe(33);
        expect(countPositions("Solution")).toBe(45);
        expect(countPositions("Work")).toBe(26);
        expect(countPositions("For")).toBe(20);
        expect(countPositions("These")).toBe(35);
        expect(countPositions("Words")).toBe(31);
    });

});

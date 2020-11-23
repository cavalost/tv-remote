const {getReversalDirections} = require("../src/reversalDirection");

describe("with given directions you will find your way back", () => {
    test('misc', () => {
        expect(getReversalDirections(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"])).toStrictEqual(['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']);
        expect(getReversalDirections(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr'])).toStrictEqual(['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']);
        expect(getReversalDirections(['Begin on Road A'])).toStrictEqual(['Begin on Road A']);
    });
});

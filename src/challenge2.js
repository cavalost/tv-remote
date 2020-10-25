function countPositions(word) {
    const matrix = [
        ['a','b','c','d','e','1','2','3'],
        ['f','g','h','i','j','4','5','6'],
        ['k','l','m','n','o','7','8','9'],
        ['p','q','r','s','t','.','@','0'],
        ['u','v','w','x','y','z','_','/'],
        ['aA','SP','','','','','','']
    ];

    const getCoords = (matrix, char) => {
        let m = 0;
        for (const row of matrix) {
            const n = row.indexOf(char);
            if (n > -1) {
                return {m, n};
            }
            m++;
        }
        return false;
    };

    if (!word || !Array.isArray(matrix) || !Array.isArray(matrix[0])) return 0;
    const wordArray = word.split('');
    const wordLength = word.length;
    const matrixWords = matrix.join();
    let wordCounter = 0;
    wordArray.forEach(char => {
        if (char === ' ' || matrixWords.includes(char.toLowerCase())) wordCounter++;
    });
    if (wordCounter !== wordLength) return 0;

    let previousPos= {m: 0, n: 0};
    let counter = 0;
    let mayus = false;
    let coords, movements;
    const calculateMovements = (coords, previousPos, char, counter) => {
        coords = getCoords(matrix, char);
        const x = Math.abs(coords.m - previousPos.m);
        const y = Math.abs(coords.n - previousPos.n);
        return { coords, movements: x + y + 1};
    };
    wordArray.forEach(char => {
        if (char.trim() && char.match(/^[a-z]+$/i) && (
            (!mayus && char === char.toUpperCase()) ||
            (mayus && char === char.toLowerCase())
        )) {
            ({ coords: previousPos, movements} = calculateMovements(coords, previousPos, 'aA', counter));
            counter += movements;
            mayus = !mayus;
        }
        if (char.trim()) {
            ({ coords: previousPos, movements} = calculateMovements(coords, previousPos, char.toLowerCase(), counter));
            counter += movements;
        }
        if (char && !char.trim()) {
            ({ coords: previousPos, movements} = calculateMovements(coords, previousPos, 'SP', counter));
            counter += movements;
        }
    });
    return counter;
}

module.exports = {
    countPositions
};


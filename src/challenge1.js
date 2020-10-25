function countPositions(word) {
    const matrix = [
        ['a','b','c','d','e','1','2','3'],
        ['f','g','h','i','j','4','5','6'],
        ['k','l','m','n','o','7','8','9'],
        ['p','q','r','s','t','.','@','0'],
        ['u','v','w','x','y','z','_','/']
    ];

    let coord = [[0, 0]];
    let counter = 0;
    const arrWord = word.split('');

    arrWord.forEach(el => {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].includes(el)) {
                let coordY = matrix[i].indexOf(el);
                let coordX = i;
                coord.push([coordX, coordY]);
            }
        }
    });

    for (let i = 0; i < coord.length - 1; i++) {
        counter += Math.abs(coord[i][1] - coord[i + 1][1]) + 1 +  Math.abs(coord[i][0] - coord[i + 1][0]);
    }
    return counter;

}

module.exports = {
    countPositions
};

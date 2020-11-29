function LongestWord(sen) {
    const arrayObj = []
    const senArray = sen.replace(/[^\w\s]/gi, '').split(' ');

    for (const word of senArray) {
        arrayObj.push({name: word, value: word.length});
    }

    arrayObj.sort((a, b) => {
        if (a.value > b.value) {
            return -1
        } else if ( a.value < b.value) {
            return 1;
        } else {
            return 0;
        }
    });

    return arrayObj[0].name;

}

module.exports = {
    LongestWord
};

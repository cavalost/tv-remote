function getTotal(arr) {
    let newArr = [];
    const sum = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            newArr.push(arr[i][j]);
            newArr.push(arr[i][j + 1]);
            newArr.push(arr[i][j + 2]);
            newArr.push(arr[i + 1][j + 1]);
            newArr.push(arr[i + 2][j]);
            newArr.push(arr[i + 2][j + 1]);
            newArr.push(arr[i + 2][j + 2]);
            sum.push(newArr.reduce((acc, el) => acc + el, 0));
            newArr = [];
        }
    }

    return Math.max(...sum);
}

module.exports = {
    getTotal
};

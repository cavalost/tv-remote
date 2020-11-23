function getReversalDirections(arr) {
    const arrReverse = arr.reverse();
    const length = arrReverse.length;
    const route = [];

    for (let i = 0; i < length; i++) {
        const road = arrReverse[i].substring(arrReverse[i].indexOf('on'));
        if (i >= 1) {
            const directionBefore = arrReverse[i - 1].split(' ')[0];
            if (directionBefore === 'Right') route.push(`Left ${road}`);
            else route.push(`Right ${road}`);
        } else {
            route.push(`Begin ${road}`);
        }
    }

    return route;
}

module.exports = {
    getReversalDirections
};

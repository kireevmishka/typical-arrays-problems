exports.min = function min(array) {
    if (array === undefined || array === []) return 0;
    else {
        var min = 0;
        for (var i = 0; i < array.length; i++) {
            if (min > array[i]) min = array[i];
        }
        return min;
    }
};

exports.max = function max(array) {
    if (array === undefined || array === []) return 0;
    else {
        var max = 0;
        for (var i = 0; i < array.length; i++)
            if (max < array[i]) max = array[i];
        return max;
    }
};

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) return 0;
    else {
        const red = (a, b) => a + b;
        return array.reduce(red, 0) / array.length;
    }
};

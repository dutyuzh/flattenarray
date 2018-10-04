function flatten(arr) {
    if (!Array.isArray(arr)) { return []; }
    return arr.reduce(function(acc, x) {
        return acc.concat( Array.isArray(x) ? flatten(x) : [x] );
    }, []);
};

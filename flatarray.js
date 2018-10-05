function flatten(arr) {
    if (!Array.isArray(arr)) { return []; }
    return arr.reduce(function(acc, x) {
        return acc.concat( Array.isArray(x) ? flatten(x) : [x] );
    }, []);
};

let animals = [['kittens','giraffes'],['puppies','sharks']]
console.log('not flat', animals); //not flat: 0: ['kittens', 'giraffes'] 1: ['puppies','sharks']
let mergedAnimals = flatten(animals);
console.log('flat!', mergedAnimals); //flat!: ['kittens', 'giraffes', 'puppies','sharks']

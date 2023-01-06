

function main() {
    const Reptiles = {
        biomes: {
            water: ["Alligators", "Crocs"],
            land: ["Snakes", "Turtles"]
        },
      
        [Symbol.iterator]() {
            const reptilesByBiome = Object.values(this.biomes) as string[];
            let reptileIndex = 0;
            let biomeIndex = 0;
            return {
                next() {
                    if (reptileIndex >= reptilesByBiome[biomeIndex].length) {
                        biomeIndex++;
                        reptileIndex = 0;
                    }
      
                    if (biomeIndex >= reptilesByBiome.length) {
                        return { value: undefined, done: true };
                    }
      
                    return {
                        value: reptilesByBiome[biomeIndex][reptileIndex++],
                        done: false
                    };
                }
            };
        }
    };

    const iterator = Reptiles[Symbol.iterator]();
    console.log('iterator.next()', iterator.next());
    console.log('iterator.next()', iterator.next());
    console.log('iterator.next()', iterator.next());
    console.log('iterator.next()', iterator.next());
    console.log('iterator.next()', iterator.next());
    console.log('iterator' ,iterator);
    
    function* makeIterator() {
        yield 1;
        yield 2;
    }
      
    const it = makeIterator();
      
    for (const itItem of it) {
        console.log(itItem);
    }
      
    console.log(it[Symbol.iterator]() === it); // true
    
}
main();
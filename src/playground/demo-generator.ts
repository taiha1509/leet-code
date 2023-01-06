// function* idMaker() {
//     let index = 0;
//     while (true) {
//         yield index++;
//         console.log('loop', index);
        
//     }
// }
  
// const gen = idMaker();
  
// console.log(gen.next()); // 0
// console.log(gen.next()); // 1
// console.log(gen.next()); // 2
// gen.next()
// gen.next()
// gen.next()
// gen.return();
// console.log(gen.next().done); // 3
// console.log(gen.return(1).done);
// console.log(gen.return(1).value);
// …
  

function* anotherGenerator(i) {
    
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

const obj = {
    *geratorFunc() {
        yield 1;
        yield 2;
    }

}

const gen = obj.geratorFunc();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

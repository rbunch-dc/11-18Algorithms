total = 200	
// Each time through the loop, 
// ways[i] is the total number of ways to get to this 
// amount of money for all the coins seen before 
let ways = [1];
for(let i = 1; i <= total; i++){
    ways.push(0)
}
const denom = [1, 2, 5, 10, 20, 50, 100, 200];
denom.forEach((coin)=>{
    for(let i = 0; i < ways.length - coin; i++){
        ways[i+coin] += ways[i]
    }
})

console.time('coins')
console.log(ways[200])
console.timeEnd('coins')
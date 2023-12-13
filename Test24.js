//เขียน function sumAll(max) เพื่อหาผลรวมตั้งแต่ 1 - max
// sumAll(100) : 1+2+3+4...+100
function  sumAll(max) {
    let sum=0
    for(let i=1; i<=max; i++){
        sum += i
    }
    return sum
}



function sumAll2(max) {
    return max*(max+1)/2
}
console.log(sumAll(2))
console.log(sumAll2(100))
let arr = [10, 20, 30, 40]

// console.log(arr[2])
arr[4] = 50
arr[5] = 60

// for(let i=0; i<=arr.length; i++){
//     console.log(arr[i])
// }
for (let el of arr){
    el *= 2
    
}
console.log('for_i', arr)

// for (let i=0; i< arr.length; i++){
//     arr[i] *= 2;
// }
// console.log('final', arr)
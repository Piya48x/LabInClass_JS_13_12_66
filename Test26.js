const users = [
    { name: 'andy', age: 30 },
    { name: 'bobby', age: 25 },
     { name: 'candy', age: 28 },
    
]

// แสดงเฉาะอายุของทุกคน

for (let i=0; i<users.length; i++){
    console.log(users[i].age)
}

for (let el of users){
    console.log(el.age)
}
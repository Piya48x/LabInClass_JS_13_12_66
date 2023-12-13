let a = 5
const b = 30

const user = {
    loginName : 'Andy',
    role : 'admin',
    age : 30,
    "like coding": true,
}

console.log(user['like coding'])

//user.status = 'single'
user['mark'] = 58
console.log(user)

for (let key in user){
    console.log(key, typeof key)
    //console.log(k) //เอาแค่ key
    //console.log(user[k]) //เป็นการแสดงค่าออกมาทั้งหมด ทั้ง key และ Value 
}

// console.log(user.loginName)
// console.log(user['loginName'])

// console.log(user.role)//เปลี่ยค่าใน object
// user.role = ("Guest")
// console.log(user)
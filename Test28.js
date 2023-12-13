// ระบบ login

const users = [
    { username: 'andy', password: '1234'},
    { username: 'bobby', password: '2345'},
    { username: 'candy', password: '3456'},
]

let inp1 = prompt('username')
// ตรวจสอบ username
// ถ้าไม่มี username นั้น ให้ขึ้น 'NO access'

let inp2 = prompt('password')
// ตรวจสอบ password
// ถ้าไม่มี password นั้น ให้ขึ้น 'NO access'

//ถ้าผ่านหมดให้ขึ้น 'Welcome'

// user ใส่ข้อมูลได้ 3 ครั้ง ถ้าไม่ผ่านให้ "No access"
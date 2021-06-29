// let myDate = new Date(2021,4,20,11,57,30);
// myDate.setFullYear(2001)
// myDate.setMonth(3)
// myDate.setDate(23)
// console.log(myDate)

/*let myDate = new Date();
console.log(Date.now() === myDate.getTime());*/

console.log(3 < 4 && !(6 > 7))
console.log(true||false)
console.log(!(3<8))

console.log(Number('12') + Number('3'))//15
console.log(String(12) + String(3))//123
console.log('4' - true)//3 
console.log(4 % 'two') //NaN 'two'는 NaN이다 그래서 NaN은 어떤값과 연산해도 다 값이 NaN이 된다.

console.log(2< '3') // 2 < 3 true
console.log(2 > true) // 2 > 1 true
console.log('2' <= false) // 2 <= 0false
console.log('two' >= 1) //비교 불가일경우에도 false가 나온다


// ===를 일치라고 하고 ==를 동등이라고함 
console.log(1 === '1') //false  ===는 형변환이 안일어남
console.log(1 === true) //false 
console.log(1 == '1')  //true ==는 형변환이 됨
console.log(1 == true) //ture

function 월급주기(name,time,wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}이며, 최종 급여는 ${total}원 입니다.`)
}

월급주기('chan',80,8590)

function nameofme(dkdkdkd) {
  
}
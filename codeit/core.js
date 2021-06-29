//변수 복사 이후 값 변경 결과 비교 = 객체의 프로퍼티 변경 시
var a = 15;
var b = a;
var obj1 = {
  c: 10,
  d: 'ddd'
}
var obj2 =obj1;

b= 20
obj2.c = 25;

console.log(b)
console.log(obj2)

//객체의 가변성에 따른 문제점

var user ={
  name: 'jaenam',
  gender: 'male'
}

var changeName= function (user, newName){
  return{
    name : newName,
    gender : user.gender
  }
}

var user2 = changeName(user, 'Jung');

if (user !== user2){
  console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2)

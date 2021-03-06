// 기본형과 참조형의 변수 복사 비교
var a = 10;
var b = a; 

var obj1 = {
  c : 10,
  d : 'ddd'
};

var obj2 = obj1;

console.log(b); //10
console.log(obj2); //{c : 10, d: 'ddd'}
/* 기본형,참조형 데이터 모두 같은 주소를 바라본다
는 점에서는 동일하다 하지만 이후 변수 복사이후
동작에 큰 차이가 발생한다*/

//변수 복사 이후 값 변경 결과 비교(1) - 객체의 프로퍼티 변경 시

b = 15;
obj2.c = 20;

console.log(a == b) // false
console.log(obj1 == obj2) // ture

/* 기본형 데이터를 복사한 변수 b의 값을 바꿨다
기본형은 변수영역에서 값의 주소값이 달라졌기 때문에
a 와 b 는 다르게 된다.*/

/* 반대로 참조형 데이터를 복사한 변수 obj2 값을 변경했을땐
두 변수가 변수영역에서 바라보는 값에 주소값은 변하지 않았고,
다로 확보한 객체 변수 영역의 주소값만 달라졌기 때문에
obj1 과 obj2 는 기본형 데이터와 반대로 바라보는 주소값이 달라지지
않았기 때문에 결과적으로 obj1 과 obj2 는 같다고 했을때 참 값이 나온다.*/

//테스트 실행 코드
console.log(a); //10
console.log(b); //15
console.log(obj1); // {c : 20, d: 'ddd}
console.log(obj2); // {c : 20, d: 'ddd}

//그래서 결과적으로 기본형 데이터를 복사한 변수 b의 값을 다시 할당했을때 a 와 b 의 값을 서로 다르고
// 참조형 데이터를 복사한 obj2 의 값을 변경했지만 obj1 과 obj2 는 서로 같은 주소값을 바라보기 때문에 
// obj2 의 값만 변경 했지만 결과적으론 obj1 의 값도 obj2.c =20 코드를 통해 동일하게 c의 값이 10에서 20으로 바뀌었다.

// 변수 복사 이후 값 변경 결과 비교(2)- 객체 자체를 변경했을때

b =15;
obj2 = {c: 20, d : 'ddd'}; //b 처럼 값을 직접 변경함, 프로퍼티만 바꾼게 아니라.

console.log(a == b) // false
console.log(obj1 == obj2) // false
/*이렇게 값을 직접 변경한다면 이번에는 obj1 과 obj2 는 서로 다른 주소값을 바라보게 된다,
왜냐하면 아까와 달리 새로운 객체를 할당 해주기 때문에 데이터 영역에서 새로운 공간에 아예 새로운
객체를 만들어 주소값을 저장하고 그 데이터 영역에 새로운 객체의 주소값을 담은 데이터 영억의 주소값을
변수 영역에 새로 할당해주기 때문에 변수영역의 주소값이 아까와는달리 둘다 다른 주소값을 바라보게 되는것이다
그래서, 참조형 데이터가 가변값이라고 할때 의 '가변'은 참조형 데이터의 그 내부의 프로퍼티를 변경할 때만 성립
하게 된다. 왜냐하면 데이터 자체값을 바꿀땐 프로퍼티를 바꿀때와 달리 원래 객체변수영역을 건들이지 않고 
새로운 객체변수영역에 새로운 객체를 만들기 때문에 기존에 만든 객체변수영역의 값들이 변하지 않기 때문에
프로퍼티를 바꿀때만 가변 하고 값을 바꿀땐 가변하지 않기 때문에 내부의 프로퍼티를 변경할 떄만 가변의 성질을
띄고 가변값이라고 설명 할 수 있게된다.*/

//불변 객체

// 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
let copyObject = function (target){
  let result ={};
  for(let prop in target) {
    result[prop] = target[prop];
  }
  return result;
}

let user = {
  name: 'Jaenam',
  gender: 'male'
};

let user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2){
  console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
}
console.log(user.name,user2.name); //Jaenam Jung
console.log(user === user2); // false

//이때 모든 협업자들이 copyObject 를 사용하기로 합의하고 그 규칙을 지킨다는 전제하에서는 user 객체가 곧 불변 객체다.
/*하지만 그런 인간의 신뢰에만 의존한다면 얇고 깨지기 쉬운 살얼음판을 걷는 것과 같다. 그보다는
모두가 그 규칙을 따르지 않고는 프로퍼티를 변경할 수 없게 시스템적으로 제약을 거는 편이 안전하다.
이런 맥락에서 immutable.js , baobab.js 등의 라이브러리가 등장해서 인기를 끌고있다.*/


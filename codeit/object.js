let ediacoffe = {
  title: 'edia',
  'time is': 9,
  menu: {
    '2012 ice' : 'iceamrecano',
    hot : 'hotchoco'
  }
}
// 대괄호 표기법 띄어쓰기나 문자열을 넣어서 불러낼때
console.log(ediacoffe['time is'])
// 변수에 프로포티 값을 넣어서 대괄효 표기법으로 불러낼수있따
let propertyMenu = 'menu'
console.log(ediacoffe[propertyMenu]) // {'2021 ice' : "iceamrecano", hot : "hotchoco"}
//객체안에 객체를 불러낼때 . 으로 계속 불르면된다
console.log(ediacoffe.menu.hot) // 'hotchco'
//객체안에 객체를 불러낼때 . 표기법으로 부를 수없을때 대괄호 표기법을 쓰면된다
console.log(ediacoffe.menu['2012 ice'])

// 존재하지아 않는 객체를 불러내면 undefined 값이 나온다 에러가 뜨지않고

console.log(ediacoffe.people) //undefined

//프로포티 수정하는법

console.log(ediacoffe.title);
ediacoffe.title='이디아';
ediacoffe.menu["2012 ice"] = 'icemoca'
console.log(ediacoffe.menu["2012 ice"])
console.log(ediacoffe.title);


//프로포티 추가하는법

console.log(ediacoffe.ceo);
ediacoffe.ceo = '정찬하';
console.log(ediacoffe.ceo)

//프로포티 삭제하는법
console.log(ediacoffe["time is"]);
delete ediacoffe["time is"];
console.log(ediacoffe["time is"]);

//프로포티 존재여부 확인 방법 
console.log(ediacoffe.menu !== undefined) //undefined 랑 일치 비교하기
console.log('title' in ediacoffe) // in 연산자 좀더 안전하다 프로포티 네임을 문자열로 쓰고 in 쓰고 객체이름을 써준다.
//in 연산자는 불린 값으로 출력하기 때문에 조건문으로도 사용할 수있게된다

//in 연산자 조건문으로 활용하기

if('amg' in ediacoffe){
  console.log('타이틀이 존재합니다')
} else{
  console.log('타이틀이 존재하지 않습니다.')
}

console.log(ediacoffe)

if('ceo' in ediacoffe){
  console.log(`ceo는 ${ediacoffe.ceo}입니다`)
}else{
  console.log('ceo가 없습니다.')
}

console.log('ediacoffe.menu.hot' in ediacoffe)


let bunho = {
  firstSay: function (name) {
    console.log(`아 ${name}ㅎㅎ 안녕하세요`);
  },
  secondSay : function () {
    console.log('혹시 무슨 공부 하세요?');
  },
  thirdSay : function () {
    console.log('아 혹시 연락처 받을 수 있을까요?')
  }
};

bunho.firstSaySay(여자);
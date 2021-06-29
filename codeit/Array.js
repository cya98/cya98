let 무한도전 = ['유재석', '박명수', '정준하','정형돈','하하' ,'노홍철','길']
//배열의 첫 요소 삭제
무한도전.shift();
console.log(무한도전)

무한도전.pop();
console.log(무한도전)

//배열의 첫 요소 추가
무한도전.unshift('김경호')
console.log(무한도전)

//배열의 마지막 요소 추가
무한도전.push('마지막추가');
console.log(무한도전)

console.log(무한도전.indexOf('노홍철')) //앞에서부터 찾는거
console.log(무한도전.lastIndexOf('노홍철')) //뒤에서부터 찾는거
console.log(무한도전.includes('노홍철')) //있는지 없는지 확인
//배열 뒤집기
무한도전.reverse()
console.log(무한도전)

//for...of 문

let myfavorit = ['apple','banana','watermelon','melon']
//그냥 for문
for(let i =0; i<myfavorit.length; i++){
  console.log(myfavorit[i]);
}
//for of 문 배열의 요소가 변수에 할당되는구조 좀더 간결함
for(let fv of myfavorit){
  console.log(fv)
}
//for in 문도 쓸순있지만 권장x 객체에 좀 더 최적화되있음

for(let index in myfavorit){
  console.log(myfavorit[index]);
}

//투표 집계하기

let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
]

let votecounter = [];

for (let name of votes) {
  if(name in votecounter){
    votecounter[name] +=1;
  } else{
    votecounter[name] =1;
  }
}

console.log(votecounter)
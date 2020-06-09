/*
    

    
    */

const colors = ["red", "blue", "green"];

//1.전통적인 for문
//배열의 요소를 순회하며...
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//2.순회문으로서의 for문
//내가 순회하고 싶은 자료구조 중에서 내가 index위주로가 아니라 'data' 그 자체를 접근하는 방식
for (let color of colors) {
  console.log(color);
}

//3.forEach 헬퍼 매서드
//forEach  => 순회문의 대표주자
const result = colors.forEach(function (color) {
  console.log(color);
});

console.log(result);

//II. filter()
const numbers = [-20, -15, 5, 10];

const positiveNumber1 = [];
numbers.forEach((number) => {
  if (number > 0) {
    positiveNumber1.push(number);
  }
});

console.log(positiveNumber1);

const positiveNumbers2 = numbers.filter((number) => number > 0);
console.log(positiveNumbers2);

//helper method : forEach, map, reduce, some,... 배열을 한번씩 순회하며, 무언가를 하는 것

//III. map()
// -> 순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
// -> 숫자배열 <-> 글자배열, 동일한 데이터를 적용해야하는 경우

inputs = ["1", "2", "3", "4", "5"];
const numberInputs = inputs.map((input) => parseInt(input));
console.log(numberInputs);

let sum = 0;
numberInputs.forEach((num) => {
  sum += num;
});

console.log(sum);

//IIII. reduce()
// - 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야하는 경우...

let sum2 = numberInputs.reduce((acc, cur) => {
  acc + cur;
});
console.log(sum2);

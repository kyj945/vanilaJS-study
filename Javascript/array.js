let array = ['A', 'B'];

console.log(array);

/*
length : 배열의 길이를 나타낸다.
*/
console.log('array length : ', array.length); // 2

/* 반복문으로 배열의 값을 가져오기
 */
// 1. default for문
console.log('===== 기본적인 for문 =====')
for(let i=0; i<array.length; i++) 
    console.log(array[i]);

// 2. for in
console.log('===== for in =====')
for(let args in array) 
    console.log(args)

// 3. forEach 
console.log('===== forEach =====')
array.forEach(args => console.log(args))
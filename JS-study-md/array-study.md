## 기본 타입 복사와 객체 타입 복사는 다르다!

### 기본 타입(Primitive Type) 복사 : 값이 복사된다.

```
let a = "a";
let b = a;

a = "test";
console.log(a); // test
console.log(b); // a

let a = 1;
let b = a;

a = 2;
console.log(a); // 2
console.log(b); // 1

```

### 객체 타입(Reference Type) 복사 : 주소가 복사된다.(즉, = 로 복사하는 경우 동일한 주소를 참조하기 때문에 동일 객체)

```
let a = { value : 1 } 
let b = a;// 얕은복사


a.value = 2;
console.log(a);// { value : 2 }
console.log(b);// { value : 2 }
console.log(a === b); // true
```

## 객체를 복사하는 방법 (깊은 복사)

1) assign
```
let obj1 = { value : 1 };
let obj2 = Object.assign({}, obj1);

obj1.value = 2;
console.log(obj1); // { value : 2 }
console.log(obj2); // { value : 1 }
console.log(obj1 === obj2) // false
```

2) Spread Syntax (...)
```
let obj1 = { value : 1 };
let obj2 = { ...obj1};

obj1.value = 2;
console.log(obj1); // { value : 2 }
console.log(obj2); // { value : 1 }
console.log(obj1 === obj2) // false
```

## 하지만 위의 1),2) 방법들은 <b>객체가 중첩된 경우에는 </b>복사가 제대로 이루어지지 않는다. 내부 객체가 같은 주소를 바라보고 있기 때문이다.

3) JSON.parse(JSON.stringify(obj))
```
let obj1 = { 
                a: {
                    b: {
                        c: 1
                    }
                }
            }

// 다음과 같이 복사를 하는 경우 obj1 하위를 그대로 복사하기 때문에 obj1이 중첩된 객체인 경우 obj1 아래 중첩된 객체의 주소가 복사된다.(reference copy) obj1 하위부터 동일한 주소를 보고 있기 때문에 obj1.a === obj2.a 가 성립하게 된다.
let obj2 = { ...obj1 };


obj1.a.b.c = 2;

console.log(obj1.a.b.c); // 2
console.log(obj2.a.b.c); // 2
console.log(obj1 === obj2)// false
console.log(obj1.a === obj2.a) // true
console.log(obj1.a.b === obj2.a.b)// true
console.log(obj1.a.b.c === obj2.a.b.c)// true

```
### 해결방법 (객체, 배열 동일)
```
let obj1 = { 
                a: {
                    b: {
                        c: 1
                    }
                }
            }
let obj2 = JSON.parse(JSON.stringify(obj1));
// parse 시 새로운 객체를 만들어주기 때문에 obj1과 같은 주소를 참조하지 않는다.

obj1.a.b.c = 2;

console.log(obj1.a.b.c); // 2;
console.log(obj2.a.b.c); // 1;
console.log(obj1 === obj2)// false
console.log(obj1.a === obj2.a)// false
console.log(obj1.a.b === obj2.a.b) // false
console.log(obj1.a.b.c === obj2.a.b.c) // false

```
## class
- template
- declare once
- no data in
- 메모리에 올라가지 않음.

## object
- instance of a class
- created many times
- data in
- 메모리에 올라감

### 1. class declare And Use
```
// class declare
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    speak() {
        console.log(`${this.name}: hellp!`)
    }
}

// object use example
const person = new Person(20, 'YJ');
console.log(person.name)
console.log(person.age)
person.speak();
```

### 2. Getter Setter example
```
class User {
    constructor(fistName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}
const user1 = new User('Steve', 'Job', -1);
```
### 3. Fields (public, private) : safari 미지원
- constructor 를 사용하지않고 필드 정의 
일반적으로 정의하는 경우 public
#을 붙여 정의하는 경우 private
-> private 필드는 외부에서 값을 읽을수도, 변경할 수도 없다. 
**example**
```
class Example {
    publicField = 1;
    #privateField = 2;
}
const ex = new Example();
console.log(ex.publicField); // 1
console.log(ex.privateField)// undefined
```

### 4. Static properties and methods 
-  static : 값이 class 자체에 할당되는 기능, object에 할당되지않고 class 자체에 할당된다. 
: 들어오는 데이터에 관계없이 class에서 공통적으로 사용하는 경우 static 을 이용해 작성하는 것이 메모리 효율을 높일 수 있다.
```
class Article {
    static publisher = 'yj'
    constructor(num) {
        this.num = num;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article1 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.printPublisher());// yj
```

### 5. Inheritance & Encapsulation & Polymorphism
```
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log('draw!')
    }
    getArea() {
        return width * height;
    }
}

class Rectangle extends Shape {
    // Inheritance & Polymorphism
    draw() {
        super.draw();//Inheritance
        console.log('□')// Polymorphism
    }
}

class Triangle extends Shape {
    // Inheritance & Polymorphism
    draw() {
        super.draw();//Inheritance
        console.log('△')// Polymorphism
    }
    // overriding (Polymorphism)
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const r = new Rectangle(10,10,'red');
console.log(r.draw()); // draw!
```

### 6. instanceof (class checking object)
- object가 해당 class 로 만들어진 object인지 확인해주는 object (true or false)
```
console.log(rectagle instanceof Rectangle);// true
console.log(triangle instanceof Rectangle);// false
```

출처 : 드림코딩 by 엘리 
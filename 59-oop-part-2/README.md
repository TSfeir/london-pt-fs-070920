# OOP: Part 2

###### Related terminology:

- Class
- Encapsulation
- Abstraction
- Reusability/inheritance
- Polymorphism
- Association
- Aggregation
- Composition

#### Class

Class is the blueprint of an object. Classes are different type of functions. We can create the number of objects using the blueprint.
The keyword class was introduced in ES6 but is syntactical sugar, JavaScript remains prototype-based.

```
class Book {
   constructor(name) {
      this.name = name
   }
}

class classicBook extends Book {
   constructor(name) {
      super(name);
      this.category = "classic"
   }
}
const book1 = new classicBook("Tom Sawyer");
```

#### Encapsulation

Encapsulation means keeping data internally without exposing it externally. It refers to the ability of the object to execute its functionality without revealing any execution details to the caller. This mean, that you can use your data inside the class in any method, but you can't get data directly.

```
const Pet = function(name) {
    let _name = name;

    return {
        greet: () => console.log(`Hello ${_name}`)
    }
}

const myPet = new Pet("Tom");
myPet.greet();
```

#### Abstraction

Abstraction means that you are hiding implementation. That means, that you are creating private logic that is accessible only inside your class.
Use `extends` to inherit another class into a new one.

```
const Pet = function(name) {
    let _name = name;

    const buildGreeting = () => {
        return `Very specific greeting for ${name}`
    };

    return {
        greet: () => console.log(buildGreeting())
    }
}

const myPet = new Pet("Tom");
myPet.greet();
```

#### Inheritance

With JS inheritance we have a mechanism that allows us to create a new class using the existing class. It means the child class inherits all the properties and behaviors of the parent class.
This pattern is called Behavior Delegation Pattern or prototypal inheritance.

```
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }

}

class Tiger extends Animal {
  attack() {
    console.log(`${this.name} attack!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.attack(); // and then hide
  }
}

let tiger = new Tiger("Tiger");

tiger.run(25); // Tiger runs with speed 25.
tiger.stop();
```

#### Polymorphism

Polymorphism in Object-Oriented Programming is an ability to create a property, a function, or an object that has more than one realization.
Polymorphism is an ability to substitute classes that have common functionality in sense of methods and data. In other words, it is an ability of multiple object types to implement the same functionality that can work in a different way but supports a common interface.

For example, if you have learned how to drive one car, you’ll be able to drive any other car. It has the same driver interface - wheel and pedals.

```
class Shape {
    area() {
        return 0;
    }
    getShapeName() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}
```

#### Association

Association is a “has-a” type relationship. Association establish the relationship b/w two classes using through their objects. Association relationship can be one to one, One to many, many to one and many to many. For example suppose we have two classes then these two classes are said to be “has-a” relationship if both of these entities share each other’s object for some work and at the same time they can exists without each others dependency or both have their own life time.

```
class Book(title, author) {
   this.title = title;
   this.author = author;
}

const book1 = new Book ('Tom Sawyer', 'Mark Twain');
const book2 = new Book ('A Christmas Carol', 'Charles Dickens')
book2.mult = book1
```

book1 was assigned to the property of mult to object book2. It shows the relationship between objects book1 and book2. Both can be added and removed independently.

#### Aggregation

Aggregation is based is on "has-a" relationship. It is a special form of association. In association there is not any classes (entity) work as owner but in aggregation one entity work as owner. In aggregation both entities meet for some work and then get separated. Aggregation is a one way association.

```
class Book(title, author) {
   this.title = title;
   this.author = author;
}

const book1 = new Book ('Tom Sawyer', 'Mark Twain');
const book2 = new Book ('A Christmas Carol', 'Charles Dickens');

let library = {
   "name": "Central Library",
   "books": []
}

library.books.push(book1);
library.books.push(book2);
```

`book1` and `book2` were added to books under library object. If the library object is deleted until book1 and book2 are available, then both Book and library live independently.

#### Composition

Composition is one of the fundamental concepts in object-oriented programming. It describes a class that references one or more objects of other classes in instance variables. This allows you to model a has-a association between objects.

For example a car, has an engine and modern coffee machines often have an integrated grinder and a brewing unit.

```
class Food {
  eat(food) {
    console.log(`Eating ${food}`);
  }

  poop() {
    console.log("Going to 💩");
  }
};

class Animal extends Food {
  constructor(name) {
    super();
    this.name = name
  }
}

class Dog extends Animal {
  constructor(...args) {
    super(...args)
  }

  bark() {
    console.log("Woff woff!")
  }

  haveLunch(food) {
    this.eat(food);
    this.poop();
  }
}

const archibald = new Dog("Archibald");
archibald.haveLunch("little mouse");
```

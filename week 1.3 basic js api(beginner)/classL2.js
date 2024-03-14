
//  # Class & Objects.

// Classes  are like blueprints of a structure , a class contains attributes or properties and funtions.
 // or 
 // classes are group of objects.

 class Animal {
  constructor(name, legCount,speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks=speaks;
  }
  speak(){
    console.log("hi there  "+ this.speaks);
  }

  static myType(){
    console.log("ANIMAL");
  }
}
let dog = new Animal("dog",4,"bhow bhow"); // create object
let cat = new Animal("cat",4,"meaow");
cat.speak();         // call funtion on object
 
// static method can be called without instantiated an object , by directly class name

Animal.myType();  // static method called.
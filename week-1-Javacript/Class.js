class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  speak() {
    console.log(this.name + " speaks " + this.speaks);
  }

  legs(){
      console.log(this.legCount)
  }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");

dog.speak();
dog.legs()
cat.speak();

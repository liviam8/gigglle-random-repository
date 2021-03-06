class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  public eat() {
    this.hunger--;
  }

  public drink() {
    this.thirst--;
  }

  public play() {
    this.thirst++;
    this.hunger++;
  }
}

let dog = new Animal();
dog.eat();
console.log(dog);

/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */
/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {
    hunger: number;
    thirst: number;

    constructor(){
        this.hunger = 50;
        this.thirst = 50;
    }
    eat(): number{
       return this.hunger--;
    }
    drink(): number{
        return this.thirst--;
     }
     play(): void {
        this.hunger++;
         this.thirst++;
     }
}

const unicorn = new Animal();
console.log(unicorn);
unicorn.eat();
console.log(unicorn);
unicorn.drink();
console.log(unicorn);
console.log(unicorn.play());
console.log(unicorn);
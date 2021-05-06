class Person2{
    age:number;
    name:String='bela';

    constructor(age:number, name:String){
        this.age=age;
        this.name=name;
        console.log('megszulettem, jee!');
    }

    walk(): void{
        console.log('setalok, mert', this.age, 'eves ', this.name, ' vagyok');
    }
}

const person1 =new Person2(99, 'Bela');
const odon= new Person2(100, 'Odon');

console.log (person1);
console.log (odon);

person1.walk();
odon.walk();
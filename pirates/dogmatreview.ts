class dog{
    private hunger:number;
    private energy:number;

    constructor() {
        this.hunger=100;
        this.energy=0;
    }

    walk(){
        this.hunger++;
        this.energy--;
    }

    eat(){
        this.hunger=0;
        this.energy=100;
    }
}

const buksi=new dog();

buksi.walk();
buksi.walk();
buksi.walk();

buksi.eat();

console.log(buksi);
class FlowerRain{
    color:string;
    static numberOfFlower:number=0;

    constructor (color:string){
        this.color=color;
        FlowerRain.numberOfFlower++;
            }
}

new FlowerRain('blue');
new FlowerRain('yellow');
new FlowerRain('rrainbow');

console.log('number of flower:', FlowerRain.numberOfFlower);

class Square{
    side:number;

    constructor(lenght:number){
        this.side=lenght;
    }

    getArea(): number{
        return this.side**2;
    }
    static createSqareFromInch(lenghtInInch:number): Square {
        return new Square(lenghtInInch*2.54);
    }
}

console.log('sqare are : ', new Square(12).getArea);
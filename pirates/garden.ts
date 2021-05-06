import { basename } from "node:path";

class Plant{
    color:string;
    waterlevel:number=0;
    waterneeded:number;
    absorb:number;
    type:string;
     


    constructor(color:string, waterneeded:number, absorb:number, type:string){
        this.color=color;   
        this.waterneeded=waterneeded;
        this.absorb=absorb;
        this.type=type;
    };

    watering(amount:number):void{
        this.waterlevel=amount*this.absorb;
    }
    isThirsty():boolean{
        if (this.waterlevel<=this.waterneeded)
            return true;
        return false;
    }

    toString():string{
        if (this.isThirsty()) 
            return "The "+this.color +" "+ this.type +"  needs water";
            // ${this.isThirsty() ? 'needs' : 'doesnt need'} water`

        return "The "+this.color +" "+ this.type +" doesn't need water";
    }
};

class Tree extends Plant{
    constructor(color:string){
        super (color, 10, 0.4, "Tree")
    }
}

class Flower extends Plant{
    constructor (color:string){
        super (color, 5, 0.75, "Flower")
    }
};


class Garden {
    plant:Plant[]

    constructor(){
            this.plant=[];
    }

    addplant(plant:Plant){
        this.plant.push(plant);
    }

    water(amount:number){
        let thirstyplants:number;
        for (let index = 0; index < this.plant.length; index++) {
            if (this.plant[index].isThirsty()) {
              thirstyplants++;  
            }
        }
        let finalamount:number;
        finalamount=amount/thirstyplants;

        for (let index = 0; index < this.plant.length; index++) {
            if (this.plant[index].isThirsty()) {
                this.plant[index].watering(finalamount)
            };
        }
    }
    toString(){
        for (let index = 0; index < this.plant.length; index++) {
            console.log(this.plant[index].toString());
            
        }
    }
}

let kekvirag = new Flower('blue');
let sargavirag= new Flower ('yellow '); 
let lilafa= new Tree ('purple');
let narancssargafa= new Tree ('orange ');
let kert= new Garden()

kert.addplant(kekvirag);
kert.addplant(sargavirag);
kert.addplant(lilafa);
kert.addplant(narancssargafa);
kert.toString();
kert.water(100);
kert.toString();







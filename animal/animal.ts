class Animal {
    owenerName:string;
    isHealthy:boolean;
    healCost:number;
    name:string;

    constructor (owenerName:string, isHealthy:boolean, healCost:number, name:string) {
        this.owenerName=owenerName;
        this.healCost=healCost;
        this.isHealthy=isHealthy;
        this.name=name;
    }

    heal(){
        this.isHealthy===true;
    };

    isAdoptable():boolean{
        if (this.isHealthy)
            return true;
        return false;
    };

    toString() {
        if(this.isHealthy)
            return (this.name + "is healthy, and adoptable");
        return (this.name + " is not healthy " + this.healCost, ", and not adoptable");
    };
}

class Cat extends Animal{
    
    constructor(ownerName:string, healty:boolean, name:string='Cica'){
        super(ownerName, healty, Math.floor(Math.random() * 6), name );
    }
}

class Dog extends Animal{
    
    constructor(ownerName:string, healty:boolean, name:string='Kutya'){
        super(ownerName, healty, Math.floor(Math.random() * (8 - 1) ) + 1, name );
    }
}

class Parrot  extends Animal{
    
    constructor(ownerName:string, healty:boolean, name:string='Papagaly'){
        super(ownerName, healty, Math.floor(Math.random() * (10 - 4) ) + 4, name );
    }
}

class Shelter{
    budget:number;
    animalsList:Animal[];
    adoptersNameList:Animal[];

    constructor() {
        this.animalsList = [];
        this.adoptersNameList = [];
        this.budget=50;
    };

    rescue(animal:Animal) :number {
        this.animalsList.push(animal)
        return this.animalsList.length
    };

    heal():number{
        let healdanimals:number=0;
        for (let index = 0; index < this.animalsList.length; index++) {
            if (this.animalsList[index].isHealthy===false){
                this.budget=this.budget-this.animalsList[index].healCost;
                healdanimals++;
                return 1;
            }
            
        }
        return 0;
    };
    addAdopter (newowener:Animal){
        this.adoptersNameList.push(newowener)
    }

    
};

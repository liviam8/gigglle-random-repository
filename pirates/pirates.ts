class Pirate{ 
    name:string;
    health:number=10;
    gold:number=10;
    isCaptain:boolean;
    isWoodenleg:boolean;
   
    constructor (name:string, captain:boolean, woodenleg:boolean){
        this.name=name;
        this.isCaptain=captain;
        this.isWoodenleg=woodenleg;
    
    }

    work(){
        if (this.isCaptain){
            this.gold=this.gold+10 
            this.health=this.health-5;
        }
        else {
            this.gold=this.gold+1;
            this.health=this.health-1;     
        }
    }

    party(){
        if(this.isCaptain){
            this.health=this.health+10;
        }
        else{
            this.health=this.health+1;

        }

    }

    toString() {
        if(this.isWoodenleg){
            return 'Hello, I\'m Jack. I have a wooden leg and 20 golds.';
        }
        
        return 'Hello, I \'m Jack. I still have my real legs and 20 golds.';
    }
}

class Ship{
    pirates:Pirate[];

    constructor(){
        this.pirates = [];
    }

    addPirate(sailor:Pirate) {
        if (!sailor.isCaptain){
            this.pirates.push(sailor);
            console.log(sailor.name + ' added');
            return true;
        }

        for (let index = 0; index < this.pirates.length; index++) {
            if(this.pirates[index].isCaptain){
                console.log(this.pirates[index].name + ' is captain, cannot add ' + sailor.name);
                return false;
            }           
        }    

        this.pirates.push(sailor);
        console.log(sailor.name + ' added');
        return true;
    }


    getPoorPirates(){
        let poorPirates:string[]=[];

        
        for (let index = 0; index < this.pirates.length; index++) {
            if ((this.pirates[index].isWoodenleg) && (this.pirates[index].gold < 15 )) {
                
                poorPirates.push(this.pirates[index].name); 
               // console.log(this.pirates[index].name + 'is a poor pirate'); 
            }   
        }
        return poorPirates;
        
    };
    getGolds(){
        let sumofgold:number=0;
        for (let index = 0; index <this.pirates.length; index++) {
            sumofgold =sumofgold + this.pirates[index].gold;
        } 
        return sumofgold;
    };

     lastDayOnTheShip(){
         for (let index = 0; index < this.pirates.length; index++) {
             this.pirates[index].party();
         }
     };
     prepareForBattle(){
         for (let index = 0; index < this.pirates.length; index++) {
            this.pirates[index].work();
            this.pirates[index].work();
            this.pirates[index].work();
            this.pirates[index].work();
            this.pirates[index].work();
         }

         this.lastDayOnTheShip();
     };


}

let Titanic = new Ship();
let Alex = new Pirate ('Alex Albador', true, false);
let Bela = new Pirate ('Bela Bellapati', false, true );
let Cecil = new Pirate('Cecil Dion', true, true);

console.log(Titanic.addPirate(Alex));
console.log(Titanic.addPirate(Bela));
console.log(Titanic.addPirate(Cecil));
console.log(Titanic.getPoorPirates());
Titanic.lastDayOnTheShip();
Titanic.prepareForBattle();
console.log(Titanic.getGolds());
import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function snake(set: Domino[]): Domino[]{
    let initialIndex: number = Math.floor(Math.random()*set.length);
    let snake: Domino[] = [];
    
    snake.push(set[initialIndex])
    for(let j = 1; j < set.length; j++){
            for(let i = 0; i < set.length; i++){
                if(snake[j-1].values[1] === set[i].values[0]){
                    snake.push(set[i])
                    }
            } 
    } 
    return snake;
}


dominoes = snake(dominoes);

print(dominoes);
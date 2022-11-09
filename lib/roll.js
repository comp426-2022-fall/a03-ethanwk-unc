
export function roll(sides, dice, rolls) {
    var results = [];                       //store roll sums in array

    for (j = 0; j < rolls; j++) {           //how many rolls 
        for (i = 0; i < dice; i++){         //how many dice per roll
            results[i] = 1 + Math.floor(Math.random() * sides); //single random roll based on sides 
        }
    }

    obj = returnObj(sides, dice, rolls, results); //create a returnable object

    return obj;
    
}

function returnObj(sides, dice, rolls, results) {//obj that stores all info
    this.sides =  sides;
    this.dice = dice;
    this.rolls = rolls;
    this.results = results;

    return this;
  }
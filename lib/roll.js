
export function roll(sides, dice, rolls) {
    var results = [];                       //store roll sums in array

    for (var j = 0; j < rolls; j++) {           //how many rolls 
        for (var i = 0; i < dice; i++){         //how many dice per roll
            results[i] = 1 + Math.floor(Math.random() * sides); //single random roll based on sides 
        }
    }

    return results;
}

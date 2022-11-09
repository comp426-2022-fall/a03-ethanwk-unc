
export function roll(sides, dice, rolls) {
    var results = [];                       //store roll sums in array

    for (let i = 0; i < rolls; i++) {           //how many rolls
            results[i] = (1 + Math.floor(Math.random() * sides)) * dice; //single random roll based on sides 
        }
        return results;
    }


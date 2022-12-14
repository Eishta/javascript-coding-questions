
const isCovered = result => {
    let pointSet = [4, 5, 6, 8, 9, 10];
    let res = [...result];
    if (res.length < pointSet) return false;
    for (let i = 0; i < pointSet.length; i++) {
        if (!res.includes(pointSet[i])) return false;
    }
    return true;
}
const rulesOfCraps = (diceRolls) => {
    let firstTurn = true,
        natural = [7, 11],
        craps = [2, 3, 12],
        prevScore = 0,
        output = '', result = new Set();

    let scores = diceRolls.split('|');

    for (let i = 0; i < scores.length - 1; i += 2) {
        let score = +scores[i] + +scores[i + 1];
        if (firstTurn) {
            if (natural.includes(score)) {
                output = 'natural';
                break
            }
            else if (craps.includes(score)) {
                output = 'craps';
                break
            }
            else {
                prevScore = score;
                result.add(score);
            }
            firstTurn = false;
        }
        else {
            if (score == 7) {
                output = 'seven out';
                break;
            } else if (score == prevScore) {
                // ? -> in any turn or only second
                output = 'Made point';
                break;
            }
            else result.add(score)
        }
    }
    console.log([...result])
    if (isCovered(result)) {
        output += ' covered';
    }

    return output;

}
console.log(rulesOfCraps("6|4|2|2|2|3|3|3|4|4")) // [10, 4, 5, 6, 8], ""
console.log(rulesOfCraps("6|4|2|2|2|3|3|3|4|4|5|4")) // [10, 4, 5, 6, 8, 9] , " covered"
console.log(rulesOfCraps("6|4|4|2|1|2|3|3|6|5|2|6|4|2|2|1|6|6|3|3|3|6|2|2|4|1|6|3|5|5")) // [10, 6, 3, 11, 8, 12, 9, 4, 5] , "Made point covered"
console.log(rulesOfCraps("2|4|5|3|5|4|3|1|4|6|2|1|3|2|2|2|6|4|6|6|5|6|3|4")) // [6, 8, 9, 4, 10, 3, 5, 12, 11], "seven out covered"
console.log(rulesOfCraps("5|4|4|2|1|2|3|3|6|4|6|6|1|1|6|6|3|3|3|6")) // [9, 6, 3, 10, 12, 2], "Made point"
console.log(rulesOfCraps("5|4|4|5")) // [9], "Made point"
console.log(rulesOfCraps("5|4|4|5|1|2|3|3|6|4|6|6|1|1|6|6|3|3|1|6")) // [9], "Made point"
console.log(rulesOfCraps("5|4|4|2|1|2|3|3|6|4|6|6|1|1|6|6|3|3|1|6")) // [9, 6, 3, 10, 12, 2], "seven out"
console.log(rulesOfCraps("2|4|5|3|5|4|3|1|4|6|6|5|1|2|5|2"))// [6, 8, 9, 4, 10, 11, 3], "seven out"
console.log(rulesOfCraps("3|2|1|3|5|3|4|5|3|3|3|4")) // [5, 4, 8, 9, 6], "seven out"
console.log(rulesOfCraps("4|4|6|1")) // [8], "seven out"
console.log(rulesOfCraps("6|6")) // [], "craps"
console.log(rulesOfCraps("1|1")) // [], "craps"
console.log(rulesOfCraps("5|6")) // [], "natural"
console.log(rulesOfCraps("2|3|3|3|2|3")) // [5, 6], "Made point"


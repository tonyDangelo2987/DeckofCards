
const pokerHandCalculator = require('./pokerHandCalculator');

// Does not test for the following: Straight Flush and Full House.
// These cases you other functions that are tested separately
let testCases = {
    "testFourOfAKind":         [6, 6, 6, 6, 2],
    "testFlush":               ['DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS'],
    "testStraightWithLowAce":  [2, 3, 4, 5, 14],
    "testStraightWithHighAce": [10, 11, 12, 13, 14],
    "testStraight":            [7, 8, 9, 10, 11],
    "testThreeOfAKind":        [6, 6, 6, 5, 2],
    "testTwoPair":             [6, 6, 2, 5, 2],
    "testOnePair":             [6, 6, 3, 5, 2]
};

let trueCheck = 0;
let falseCheck = 0;

for(i in testCases) {
    if(pokerHandCalculator.isFourOfAKind(testCases[i]))
        trueCheck++;
    else
        falseCheck++;
}

if(trueCheck == 1 && falseCheck == 7)
    console.log("testFourOfAKind: PASSED");
else
    console.log("testFourOfAKind: FAILED");

trueCheck = 0;
falseCheck = 0;

for(i in testCases) {
    if(pokerHandCalculator.isFlush(testCases[i]))
        trueCheck++;
    else
        falseCheck++;
}

if(trueCheck == 1 && falseCheck == 7)
    console.log("testFlush: PASSED");
else
    console.log("testFlush: FAILED");

trueCheck = 0;
falseCheck = 0;

for(i in testCases) {
    if(pokerHandCalculator.isStraight(testCases[i]))
        trueCheck++;
    else
        falseCheck++;
}

if(trueCheck == 3 && falseCheck == 5)
    console.log("testStraight: PASSED");
else
    console.log("testStraight: FAILED");

trueCheck = 0;
falseCheck = 0;

for(i in testCases) {
    if(pokerHandCalculator.isThreeOfAKind(testCases[i]))
        trueCheck++;
    else
        falseCheck++;
}

if(trueCheck == 1 && falseCheck == 7)
    console.log("testThreeOfAKind: PASSED");
else
    console.log("testThreeOfAKind: FAILED");

trueCheck = 0;
falseCheck = 0;

for(i in testCases) {
    if(pokerHandCalculator.isTwoPair(testCases[i]))
        trueCheck++;
    else
        falseCheck++;
}

if(trueCheck == 1 && falseCheck == 7)
    console.log("testTwoPair: PASSED");
else
    console.log("testTwoPair: FAILED");

trueCheck = 0;
falseCheck = 0;

for(i in testCases) {
    if(pokerHandCalculator.isOnePair(testCases[i]))
        trueCheck++;
    else
        falseCheck++;
}

if(trueCheck == 1 && falseCheck == 7)
    console.log("testOnePair: PASSED");
else
    console.log("testOnePair: FAILED");

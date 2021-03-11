
var pokerHand = [
  'HIGHEST POSSIBLE HAND IS A STRAIGHT FLUSH',
  'HIGHEST POSSIBLE HAND IS A FOUR OF A KIND',
  'HIGHEST POSSIBLE HAND IS A FULL HOUSE',
  'HIGHEST POSSIBLE HAND IS A FLUSH',
  'HIGHEST POSSIBLE HAND IS A STRAIGHT',
  'HIGHEST POSSIBLE HAND IS A THREE OF A KIND',
  'HIGHEST POSSIBLE HAND IS TWO PAIR',
  'HIGHEST POSSIBLE HAND IS ONE PAIR',
  'HIGHEST POSSIBLE HAND IS A HIGH CARD'
];

// Gives double digit numbers their actual value
function compareNumbers(a, b) {
  return a - b;
}

function isFourOfAKind(cards) {
  var defaultValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let valuedHand = [];

  // Sort values
  for(i in defaultValues)
    valuedHand.push(cards.filter(value => value == defaultValues[i]));

  // Count values
  for(i in valuedHand) {
    if(valuedHand[i].length == 4)
      return true;
  }
}

function isFlush(cards) {
  let valuedHand = [];
  var defaultSuits = ['CLUBS', 'HEARTS', 'SPADES', 'DIAMONDS'];

  // Sort suits
  for(i in defaultSuits)
    valuedHand.push(cards.filter(suit => suit == defaultSuits[i]));

  // Count suits
  for(i in valuedHand) {
    if(valuedHand[i].length == 5)
      return true;
  }
}

function isStraight(cards) {
  // Sorts hand from lowest to highest
  cards.sort(compareNumbers);

  // Straight with an Ace
  if(cards[4] == 14) {
    if(cards[0] == 2 && cards[1] == 3 && cards[2] == 4 && cards[3] == 5) {
      return true;
    }
    else if(cards[0] == 10 && cards[1] == 11 && cards[2] == 12 && cards[3] == 13) {
      return true;
    }
  }
  // Straight
  else {
    var cardCheck = cards[0] + 1;
    
    for(i = 1; i < 5; i++) {
      if(cards[i] != cardCheck)
        return false;
      
      cardCheck++;
    }
    
    return true;
  }
}

function isThreeOfAKind(cards) {
  var defaultValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let valuedHand = [];

  // Sort values
  for(i in defaultValues)
    valuedHand.push(cards.filter(value => value == defaultValues[i]));

  // Count values
  for(i in valuedHand) {
    if(valuedHand[i].length == 3)
      return true;
  }
}

function isTwoPair(cards) {
  var defaultValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let valuedHand = [];
  let pairCount = 0;

  // Sort values
  for(i in defaultValues)
    valuedHand.push(cards.filter(value => value == defaultValues[i]));

  // Count values
  for(i in valuedHand) {
    if(valuedHand[i].length == 2)
      pairCount++
  }

  if(pairCount == 2)
    return true;
}

function isOnePair(cards) {
  var defaultValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  let valuedHand = [];
  let pairCount = 0;

  // Sort values
  for(i in defaultValues)
    valuedHand.push(cards.filter(value => value == defaultValues[i]));

  // Count values
  for(i in valuedHand) {
    if(valuedHand[i].length == 2)
      pairCount++
  }

  if(pairCount == 1)
    return true;
}

module.exports = {isStraight, isFlush, isFourOfAKind, isThreeOfAKind, isTwoPair, isOnePair, pokerHand};
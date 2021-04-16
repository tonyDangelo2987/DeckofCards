// Hello
var http = require('http');

function getHighestPossibleHand(hand) {
  const pokerHandCalculator = require('./pokerHandCalculator');
  let playerValues = [];
  let playerSuits =[];

  // Filling array with values only in number format
  for(i in hand.cards) {
    if(hand.cards[i].value == 'JACK')
      playerValues.push(11);
    else if(hand.cards[i].value == 'QUEEN')
      playerValues.push(12);
    else if(hand.cards[i].value == 'KING')
      playerValues.push(13);
    else if(hand.cards[i].value == 'ACE')
      playerValues.push(14);
    else
      playerValues.push(hand.cards[i].value);

    playerSuits.push(hand.cards[i].suit);
  }

  // Convert strings to numbers
  playerValues = playerValues.map(i => Number(i));

  if(pokerHandCalculator.isStraight(playerValues) && pokerHandCalculator.isFlush(playerSuits))
    return pokerHandCalculator.pokerHand[0];
  if(pokerHandCalculator.isFourOfAKind(playerValues))
    return pokerHandCalculator.pokerHand[1];
  if(pokerHandCalculator.isThreeOfAKind(playerValues) && pokerHandCalculator.isOnePair(playerValues))
    return pokerHandCalculator.pokerHand[2];
  if(pokerHandCalculator.isFlush(playerSuits))
    return pokerHandCalculator.pokerHand[3];
  if(pokerHandCalculator.isStraight(playerValues))
    return pokerHandCalculator.pokerHand[4];
  if(pokerHandCalculator.isThreeOfAKind(playerValues))
    return pokerHandCalculator.pokerHand[5];
  if(pokerHandCalculator.isTwoPair(playerValues))
    return pokerHandCalculator.pokerHand[6];
  if(pokerHandCalculator.isOnePair(playerValues))
    return pokerHandCalculator.pokerHand[7];

  return pokerHandCalculator.pokerHand[8];
} 

var options = {
  host: 'deckofcardsapi.com',
  path: '/api/deck/new/draw/?count=5'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    var obj = JSON.parse(str);
    var displayHand = "";

    console.log('\nYour hand is:\n');

    for(i in obj.cards)
      displayHand += " | "+obj.cards[i].value+' OF '+obj.cards[i].suit+" | ";
    
    console.log(displayHand);

    console.log('\n'+getHighestPossibleHand(obj));
  });
}

http.request(options, callback).end();

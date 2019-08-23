/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
*/

class Flight {
  constructor(origin=null,destination=null) {
    this.origin=origin;
    this.destination=destination;
  }
}

const makeRoute = (yourArrayOfObjs) => {
  let output = [];
  let temp;
  for (i = 0; i< yourArrayOfObjs.length; i++) {


  }
}

const leg1 = new Flight('SFO', 'HKO')
const leg2 = new Flight('YYZ', 'SFO')
const leg3 = new Flight('YUL', 'YYZ')
const leg4 = new Flight('HKO', 'ORD')
const iten1 = [leg1,leg2,leg3,leg4]



$(document).ready(function() {
  $('#button1').click(function(){
    value1 = $('#input1-section-1').value();
    $('#output-section-0').text(1)
  })
});

/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
*/

const findAddends = (yourArray, sum) => {
  let working = [];
  for (i = 0; i<yourArray.length; i++) {
    if (yourArray[i] < sum) {
      working.push(yourArray[i])
    }
  }
  return working;
}

$(document).ready(function() {
  $('#button1').click(function(){
    value1 = $('#input1-section-1').value();
    $('#output-section-0').text(1)
  })
});

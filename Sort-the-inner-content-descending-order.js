/*
You have to sort the inner content of every word of a string in descending order.
The inner content is the content of a word without first and the last char.

Some examples:
  "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
  "wait for me"        -->  "wiat for me"
  "this problem is easy"  -->  "tihs pboerlm is esay"

Words are made up of lowercase letters.
The string will never be null and will never be empty.
*/


// Solution

function sortTheInnerContent(words){
  return words.replace(/\B\w+(?=\w)/g, function(match){
    return match.split('').sort().reverse().join('');
  });
}
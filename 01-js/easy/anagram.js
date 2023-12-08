/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

str1=str1.replace(/\s+/g,'').toLowerCase()
str2=str2.replace(/\s+/g,'').toLowerCase()
let str1_list=str1.split('').sort()
let str2_list=Array.from(str2).sort()

console.log(str1_list)
console.log(str2_list)
return JSON.stringify(str1_list)==JSON.stringify(str2_list)
}

console.log(isAnagram('Aa pr','apar'))

module.exports = isAnagram;

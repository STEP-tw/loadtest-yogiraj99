/*
  countVowels
  count the number of times a vowel appears in a string
  regardless of whether it is an uppercase or a lowercase vowel
  countVowels("hello") => 2
  countVowels("peel") => 2
  countVowels("coffee") => 3
*/


/*
  countConsonants
  count the number of times a consonant appears in a string
  regardless of whether it is an uppercase or a lowercase consonant.
  A consonant is a letter that is not a vowel.
  countConsonants("hello") => 2
  countConsonants("peel") => 2
  countConsonants("coffee") => 3
  countConsonants("123ab") => 1
*/


/*
  isPalindrome
  A palindrome is a word or a phrase that when reversed reads the same.
  In English, the spelling has to be the same, not the syllables.
  This function takes in some text and determines if it is a palindrome or not.
  isPalindrome("madam") => true
  isPalindrome("abcd") => false
  isPalindrome("") => true
  isPalindrome("a")  => true
  isPalindrome("Madam") => false(case sensitive)
*/


/*
  reverse
  This function reverses a string.
  reverse("hello") => "olleh"
  reverse("Abc") => "cbA"
  reverse("") => ""
*/


exports.countVowels=countVowels;
exports.countConsonants=countConsonants;
exports.isPalindrome=isPalindrome;
exports.reverse=reverse;

const isPalindrome = (x) => {
  const numberToString = x.toString();
  return numberToString.split("").reverse().join("") === numberToString;
};

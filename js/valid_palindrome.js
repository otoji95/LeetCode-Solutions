function isPalindrome(s) {
  if (s.length == 1) {
    return true;
  }
  const splitString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0, j = splitString.length - 1; i < j; i++, j--) {
    console.log(splitString);
    console.log(splitString[i], splitString[j]);
    if (splitString[i] !== splitString[j]) {
      return false;
    }
  }
  return true;
}

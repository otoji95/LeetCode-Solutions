function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const x = {};
  for (let letter of s) {
    x[letter] = x[letter] ? (x[letter] += 1) : 1;
  }
  for (let letter of t) {
    if (x[letter] === 0 || !x[letter]) {
      return false;
    }
    x[letter]--;
  }
  return true;
}

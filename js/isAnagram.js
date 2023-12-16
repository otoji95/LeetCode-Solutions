function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  x = s.split("").sort();
  y = t.split("").sort();
  for (let i = 0; i < s.length; i++) {
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
}

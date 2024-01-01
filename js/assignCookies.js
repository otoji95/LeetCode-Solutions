function findContentChildren(g, s) {
  if (s.length == 0) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let maxNum = 0;
  let cookie = s.length - 1;
  let child = g.length - 1;
  while (cookie >= 0 && child >= 0) {
    if (s[cookie] >= g[child]) {
      maxNum++;
      cookie--;
      child--;
    } else {
      child--;
    }
  }
  return maxNum;
}

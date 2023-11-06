function mergeStringsAlternately(str1, str2) {
  let i = 0;
  x = [];
  while (i < str1.length || i < str2.length) {
    if (str1[i]) {
      x.push(str1[i]);
    }
    if (str2[i]) {
      x.push(str2[i]);
    }
    i++;
  }
  return x.join("");
}

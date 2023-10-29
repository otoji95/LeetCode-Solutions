var lengthOfLastWord = function (s) {
  const x = s.trimEnd().split(" ");
  return x[x.length - 1].length;
};

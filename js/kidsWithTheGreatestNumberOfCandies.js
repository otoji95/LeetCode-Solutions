function kidsWithCandies(kidsCandiesCount, extraCandies) {
  const maxCandies = Math.max(...kidsCandiesCount);
  const x = [];
  for (let i = 0; i < kidsCandiesCount.length; i++) {
    kidsCandiesCount[i] + extraCandies >= maxCandies ? x.push(true) : x.push(false);
  }
  return x;
}

function flat(arr, n) {
  let stack = arr.map((item) => ({ item, depth: 0 }));
  let flattened = [];

  while (stack.length > 0) {
    let { item, depth } = stack.pop();

    if (Array.isArray(item) && depth < n) {
      item.forEach((subItem) => {
        stack.push({ item: subItem, depth: depth + 1 });
      });
    } else {
      flattened.push(item);
    }
  }

  return flattened.reverse();
}

Array.prototype.groupBy = function (fn) {
  let groups = {};
  for (let ele of this) {
    let key = fn(ele);
    if (groups.hasOwnProperty(key)) {
      groups[key].push(ele);
    } else {
      groups[key] = [ele];
    }
  }
  return groups;
};

//
console.log(
  [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
    return item.id;
  })
);

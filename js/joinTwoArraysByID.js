function join(arr1, arr2) {
  const mergedObjects = new Map();

  arr1.forEach((obj) => {
    if (!mergedObjects.has(obj.id)) {
      mergedObjects.set(obj.id, obj);
    }
  });
  arr2.forEach((obj) => {
    if (mergedObjects.has(obj.id)) {
      let existingObj = mergedObjects.get(obj.id);
      let objKeys = Object.keys(obj);
      console.log(existingObj);
      for (let i = 0; i < objKeys.length; i++) {
        existingObj[objKeys[i]] = obj[objKeys[i]];
      }
      mergedObjects.set(obj.id, existingObj);
    } else {
      mergedObjects.set(obj.id, obj);
    }
  });
  let joinedArray = Array.from(mergedObjects.values());
  return joinedArray.sort((a, b) => a.id - b.id);
}

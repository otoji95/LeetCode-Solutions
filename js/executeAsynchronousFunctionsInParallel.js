function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(functions) || functions.length === 0) {
      resolve([]);
      return;
    }

    let results = new Array(functions.length);
    let completed = 0;

    functions.forEach((func, index) => {
      if (typeof func === "function") {
        func()
          .then((result) => {
            results[index] = result;
            completed += 1;
            if (completed === functions.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject(new Error("Array elements must be functions that return promises"));
      }
    });
  });
}

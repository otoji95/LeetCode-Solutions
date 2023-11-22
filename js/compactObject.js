function compactObject(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj ? obj : undefined;
  }

  if (Array.isArray(obj)) {
    return obj.map((ele) => compactObject(ele)).filter((ele) => Boolean(ele));
  }
  let compacted = {};
  for (let key in obj) {
    let value = compactObject(obj[key]);
    if (value !== undefined) {
      compacted[key] = value;
    }
  }

  return compacted;
}

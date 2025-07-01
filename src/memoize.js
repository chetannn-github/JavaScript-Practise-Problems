export  function myMemoize(func) {
  const dp = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (dp.has(key)) return dp.get(key);
    const result = func.apply(this, args);
    dp.set(key, result);
    return result;
  }
}

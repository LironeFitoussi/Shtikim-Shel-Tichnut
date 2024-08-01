function memoAdd() {
    let cache = {};
    return  function(a, b) {
      let key = a + ',' + b;
      if (key in cache) {
        console.log('From cache');
        return cache[key];
      }
      console.log('Calculating');
      let result = a + b;
      cache[key] = result;
      return result;
    }
  }
  
  let add = memoAdd();
  console.log(add(2, 3)); // Calculating, 5
  console.log(add(2, 3)); // From cache, 5
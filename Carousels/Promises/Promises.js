// 4
let myPromise = new Promise((resolve, reject) => {
  // Processing
  let success = true; // Simulate a condition
  if (success) {
    resolve("Book has shipped!");
  } else {
    reject("Book is out of stock.");
  }
});

// 5
myPromise.then((value) => {
  console.log("Success: " + value);
});

// 6
myPromise.catch((error) => {
  console.log("Failure: " + error);
});

// 7
myPromise
  .then((value) => {
    console.log("First book: " + value);
    return anotherPromise;
  })
  .then((anotherValue) => {
    console.log("Second book: " + anotherValue);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

// 8
let promise1 = Promise.resolve("Book 1");
let promise2 = Promise.resolve("Book 2");

Promise.all([promise1, promise2])
    .then((values) => {
    console.log("All books arrived: " + values);
    }
);

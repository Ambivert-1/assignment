function sumNumbersPromise(n) {
    return new Promise((resolve, reject) => {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      resolve(sum);
    });
  }
  
  sumNumbersPromise(4)
    .then((result) => {
      console.log("Sum using promise:", result);
    })
    .catch((error) => {
      console.error(error);
    });

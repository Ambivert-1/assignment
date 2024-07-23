function sumNumbersCallback(n, callback) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    callback(sum);
  }
  
  sumNumbersCallback(4, (result) => {
    console.log("Sum using callback:", result);
  });

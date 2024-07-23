// asyncAwaitSum.js

function sumNumbersPromise(n) {
    return new Promise((resolve, reject) => {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      resolve(sum);
    });
  }
  
  async function sumNumbersAsync(n) {
    try {
      const result = await sumNumbersPromise(n);
      console.log("Sum using async/await:", result);
    } catch (error) {
      console.error(error);
    }
  }
  
  sumNumbersAsync(4);
  
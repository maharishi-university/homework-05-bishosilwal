const isPrime = (n: number) => {
  return new Promise((resolve, reject) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) reject("{prime: false}");
    }
    if (n > 1) {
      resolve("{prime: true}");
    } else {
      reject("{prime: false}");
    }
  });
};
export default isPrime;

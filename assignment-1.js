const isPrime = (n) => {
  //check if the user input is a number or not;
  if (typeof n !== "number") {
    return "only number can accept";
  }
  //check if the number is positive and greater than 1
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

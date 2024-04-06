const factorial = (n) => {
  //check the input is positive integer or not
  if (n < 0 || !Number.isInteger(n) || typeof n !== "number") {
    return "only positive integer can accept!";
  }

  let ans = 1;
  for (let i = n; i > 0; i--) {
    ans *= i;
  }
  return ans;
};

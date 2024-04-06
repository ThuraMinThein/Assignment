const isPalindrome = (str) => {
  let firstIndex = 0;
  let lastIndex = str.length - 1;

  while (firstIndex < lastIndex) {
    if (str[firstIndex] !== str[lastIndex]) {
      return false;
    }
    firstIndex++;
    lastIndex--;
  }
  return true;
};

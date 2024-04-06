const countVowels = (str) => {
  //check user input is string or not;
  if (typeof str !== "string") {
    return "only string can accept";
  }
  let count = 0;
  vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    vowels.forEach((vowel) => {
      if (vowel === str[i]) {
        count++;
      }
    });
  }
  return count;
};

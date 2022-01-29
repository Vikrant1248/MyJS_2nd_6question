const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 5 ? num - 5 : num) + '...' : str;

console.log(truncateString('vikrantmandake', 8));
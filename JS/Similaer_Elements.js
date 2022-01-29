const similarity = (arr, values) => arr.filter(v => values.includes(v));

console.log(similarity([4, 8, 9], [9, 4, 1]));

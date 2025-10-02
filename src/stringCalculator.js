function add(numbers) {
  if (!numbers) return 0;   // if empty string, return 0
  return Number(numbers);
}

module.exports = { add };

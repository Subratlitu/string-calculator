function add(numbers) {
  if (!numbers) return 0;   // if empty string, return 0

  const parts = numbers.split(',');
  return parts.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };

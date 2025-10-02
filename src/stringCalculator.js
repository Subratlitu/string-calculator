function add(numbers) {
  if (!numbers) return 0;   // if empty string, return 0

  // Split on both comma and newline
  const parts = numbers.split(/[\n,]/);

  return parts.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };

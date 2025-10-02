function add(numbers) {
  if (!numbers) return 0;

  let delimiters = /[\n,]/;  // default: comma or newline

  // Check for custom delimiter at the start
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterLineEnd);
    delimiters = new RegExp(`[${customDelimiter}]`);
    numbers = numbers.substring(delimiterLineEnd + 1);
  }

  const parts = numbers.split(delimiters);

  return parts.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };

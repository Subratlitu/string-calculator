function add(numbers) {
  if (!numbers) return 0;

  let delimiters = /[\n,]/;  // default: comma or newline

  // Custom delimiter check
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterLineEnd);
    delimiters = new RegExp(`[${customDelimiter}]`);
    numbers = numbers.substring(delimiterLineEnd + 1);
  }

  const parts = numbers.split(delimiters).map(Number);

  // Check for negatives
  const negatives = parts.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return parts.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };

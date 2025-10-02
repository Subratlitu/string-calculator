# String Calculator

A simple String Calculator implemented in Node.js using Test-Driven Development (TDD).

---

## Features

1. Empty string returns 0  
2. Single number returns the number  
3. Two or more numbers return their sum  
4. Supports new line (`\n`) as a delimiter  
5. Supports custom delimiters (`//;\n1;2` → 3)  
6. Throws error for negative numbers ("negative numbers not allowed")  

---

## Setup

```bash
git clone https://github.com/Subratlitu/string-calculator.git
cd string-calculator
npm install
```
# Run Tests 
npm test

# Example Usage
const { add } = require("./src/stringCalculator");

console.log(add(""));          // 0
console.log(add("1"));         // 1
console.log(add("1,5"));       // 6
console.log(add("1\n2,3"));    // 6
console.log(add("//;\n1;2"));  // 3

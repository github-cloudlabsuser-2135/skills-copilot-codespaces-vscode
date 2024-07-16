// Simple Calculator in JavaScript

class Calculator {
    // Function to add two numbers
    add(a, b) {
      return a + b;
    }
  
    // Function to subtract two numbers
    subtract(a, b) {
      return a - b;
    }
  
    // Function to multiply two numbers
    multiply(a, b) {
      return a * b;
    }
  
    // Function to divide two numbers
    divide(a, b) {
      if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
      }
      return a / b;
    }
  }
  
  // Example usage
  const calc = new Calculator();
  
  console.log("Addition of 5 and 3:", calc.add(5, 3));
  console.log("Subtraction of 5 from 3:", calc.subtract(5, 3));
  console.log("Multiplication of 5 and 3:", calc.multiply(5, 3));
  console.log("Division of 5 by 3:", calc.divide(5, 3));
  console.log("Attempt to divide by zero:", calc.divide(5, 0));cc
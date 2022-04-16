function factorial(number) {
  if (number === 0 || number === 1) return 1

  return factorial(number - 1) * number
}

console.log("Factorial of 5 is: " + factorial(5));
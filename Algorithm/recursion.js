/*
**Recursion

Recursion is a problem solve technique where the solution depends on the solution to smaller
instances of the same problem

when a function calls itself. Great technique to simplify solution

Every recursive solution needs to have a base case - a condition to terminate the recursion.

Recursion might simplify solving a problem but it does not always translate to a faster solution.
A recursive solution may be far worse compared to an iterative solution.


* Recursive Fibonacci
function recursiveFibonacci(n){
  if (n < 2){
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

Big O = O(n) - iterative
O(2^n) - recursive : 2 calls for one


* Recursive Factorial

function recursiveFactorial(n){
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

Big O = O(n)

*/
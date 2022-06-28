/* 

**Fibonacci sequence

The fibonacci sequence is a sequence in which each number is sum of the two preceding ones.
The frist two numbers in the sequence are 0 and 1

fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8]

*Give number 'n', find the first 'n' elements of the fibonacci sequence

function fibonacci(n) {
  let arr = [0,1]
  for(let i = 2; i < n; i++){
    arr.push((arr[i-2])+(arr[i-1]));
    // arr[i] = arr[i-1] + arr[i-2]
  }
  return arr;
};

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

Big-O = O(n) : function contains one for loop



**Factorial of number

The factorial of a non-negative integer 'n', denoted n!, 
is the product of all positive integers less than or equal to 'n'

Factorial of zero is 1

factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120

*Give an integer 'n', find the factorial of that integer

function factorial(n) {
  let result = 1;
  for(let i = 2; i <= n; i++){
    result *= i
  }
  return result;
}

console.log(factorial(4)) // 24
console.log(factorial(5)) // 120

Big-O = O(n) : function contains one for loop



**Prime number

A prime number is a natural number greater than 1 that is not product of two smaller natural numbers

isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)

*Give a natural number 'n', determine if the number is prime or not

function isPrime(n) {
  if (n < 2){
    return false;
  }
  for(let i = 2; i < n; i++){ // i should be less than n since n is always divisible by itself.
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

Big-O = O(n) : function contains one for loop


*Optimized primality test

Integers larger than the square root do not need to be checked bc whenever 'n=a*b', one of the
two factors 'a' and 'b' is less than or equal to the square root of 'n'

n=24, a=4, b=6 / the square root of 24 is 4.89
a(4) is less than the square root n

n=35, a=5, b=7 / the square root of 35 is 5.91
a(5) is less than the square root n

// n이 정수가 아닐 경우 약수들은 n의 절반을 기준으로 몫과 나누는 값이 반대로 바뀐다. 따라서 n의 제곱근까지만 반복해보면
이 수가 소수인지 아닌지 알 수 있다.

function isPrime(n) {
  if (n < 2){
    return false;
  }
  for(let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

Big-O = O(sqrt(n))


** Power of Two

isPowerOfTwo(1) = true
isPowerOfTwo(2) = true
isPowerOfTwo(5) = false


*Give a positive integer 'n', determine if the number is power of 2 or not

function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  while(n > 1) {
    if(n % 2 !== 0){
      return false
    }
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false

Big-O = O(logn) : Inside the while loop we are reducing the value of n by half.


*Power of two bitwise

function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  return (n & (n-1)) === 0
}

// bitwise & is 1 if both numbers are 1 else 0

1 = 1
2 = 10
4 = 100
8 = 1000

Big-O = O(1) : regardless of the input size, it only needs to run one line of code.

*/
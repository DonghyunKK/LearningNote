/*
  Alogrithm
  
  Set of well-defined instructions to solve a proticular problem
  ex) following the recipe

  - Well defined inputs and outputs
  - Each step should be clear an unambiguous
  - Language independent

  Time complexity - Amount of time taken by an algorithm to run
  Space complexity - Amount of memory taken by an algorithm to run


  Big-O Notation
  
  The worst case complexity of an algorithm is represented using the Big-O notation
  Big-O notation describes the complexity of an algorithm using algebraic terms

  - It expressed in terms of the input
  - It can ignore the small details (n+2 => n) if n is bigger

  O(1) - constant
  O(n) - linear

  Most of the time loop in algorithm, time complexity is at least Linear O(n)

  nested loop time complexity :  O(n2) - quadratic

  input size reduces by half of every iteration : O(logn) - Logarithmic


  Object Big-O

  An object is a collection of key value pairs

  insert - O(1)
  remove - O(1)
  access - O(1)
  search - O(n) : the worst case senario, you might have to search all the properties
  
  Obejct.keys() - O(n)
  Obejct.values() - O(n)
  Obejct.entries() - O(n)



  Array Big-O

  An array is an ordered collection of values.

  insert / remove at the end - O(1)
  insert / remove at the beginning - O(n) : Index has to be reset for every remaining element in the array
  access - O(1)
  search - O(n) :  the worst case senario, you might have to search all the elements

  push / pop - O(1)
  shift / unshift / concat / slice / splice - O(n)
  forEach / map / filter / reduce - O(n)

/*
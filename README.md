# Type Mismatch Error in TypeScript

This repository demonstrates a common type mismatch error in TypeScript. The `greeter` function expects a string argument but receives an array of strings, leading to a runtime error if not caught during compilation.

## Bug

The `bug.ts` file contains the erroneous code.  The `greeter` function is defined to accept a single string, but it's called with an array of strings.  TypeScript's type system will not catch this error during compilation because the error only manifests at runtime. 

## Solution

The `bugSolution.ts` file demonstrates the solution. The function is modified to accept either a single string or an array of strings. This is done using function overloading or type union.
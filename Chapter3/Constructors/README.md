# Constructors

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads.

There are just a few differences between class constructor signatures and function signatures:

- Constructors cant have type parameters - these belong on the outer class declaration, which we will learn about later
- Constructors cant have return type annotations - the class instance type is always whats returned

## Super Calls

Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this.

# Generic Functions

Its common to write a function where the types of the input relate to the type of the output.

Function using any as an input type have unfortunately also any as the return. It would be better if the function returned the type of the array element.

In TypeScript, generics are used when we want to describe a correspondence between two values.

Note: Having too many type parameters or using constraints where they arent needed can make inference less successful.

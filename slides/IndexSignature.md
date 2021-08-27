# Index types and index signatures

An index signature parameter type must be ‘string’ or ‘number’. If you have a type with a string index signature, keyof T will be string | number.

## Symbols

Starting with ECMAScript 2015, symbol is a primitive data type, just like number and string.
Symbol values are created by calling the Symbol constructor.
Symbols are immutable, and unique.

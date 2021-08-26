# Property Modifiers

Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

## Optional Properties

Much of the time, we will find ourselves dealing with objects that might have a property set. In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names.

## Readonly Properties

Properties can also be marked as readonly for TypeScript. While it wont change any behavior at runtime, a property marked as readonly cant be written to during type-checking.

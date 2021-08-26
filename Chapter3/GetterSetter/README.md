# Getters / Setters

Classes can also have accessors.

Note: get/set pair with no extra logic is very rarely useful in JavaScript. It is fine to expose public fields if you don’t need to add additional logic during the get/set operations.

TypeScript has some special inference rules for accessors:

- If get exists but no set, the property is automatically **readonly**
- If the type of the setter parameter is not specified, it is inferred from the return type of the getter
- Getters and setters must have the same Member Visibility

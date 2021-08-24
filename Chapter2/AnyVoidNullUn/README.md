# Any, Void, Null, Unknown and Undefined

## Any

TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal.

## Void

void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.

## Null and Undefined

In TypeScript, both undefined and null actually have their types named undefined and null respectively.  
By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

## Unknown

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content. In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.

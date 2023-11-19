# Modules in TypeScript

In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.

## ES Module Syntax

```javascript
// lib.ts
export type someType = number | string;
```

```javascript
// scripts.ts
import { someType } from "./lib.js";

const s1: someType = 0;

import { someType as aliasName } from "./lib.js";

const s2: aliasName = 0;

import * as lib from "./lib.js";

const s3: lib.someType = 0;
```

// 22 - Strict Mode & Compiler Options
// TypeScript configuration for enhanced type safety

// This file demonstrates the strict mode settings in tsconfig.json
// Below is a comprehensive tsconfig.json configuration example

{
  "compilerOptions": {
    // ========== Strict Mode ==========
    // Enable all strict type checking options
    "strict": true,

    // ========== Core Type Checking ==========
    // Flag errors on implicit any type
    "noImplicitAny": true,
    // Error on this expressions with an implied 'any' type
    "noImplicitThis": true,
    // Enable strict null checks - null and undefined are not assignable to other types
    "strictNullChecks": true,
    // Enable strict bind, call, apply checks on functions
    "strictBindCallApply": true,
    // Check for class properties declared but not set in constructor
    "strictPropertyInitialization": true,
    // Raise error when a function parameter gets a default value based on its declared type
    "strictFunctionTypes": true,

    // ========== Additional Safety Checks ==========
    // Error when switch statements don't have exhaustive cases
    "noImplicitReturns": true,
    // Report errors on unreachable code
    "noUnreachableCode": true,
    // Fallthrough cases in switch statements
    "noFallthroughCasesInSwitch": true,
    // Error on unused local variables
    "noUnusedLocals": true,
    // Error on unused function parameters
    "noUnusedParameters": true,
    // Error on implicit return types
    "noImplicitReturns": true,
    // Raise an error when accessing properties of any type implicitly
    "noPropertyAccessFromIndexSignature": true,

    // ========== Module & Target ==========
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],

    // ========== Emit Settings ==========
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "removeComments": false,
    "inlineSourceMap": false,

    // ========== Module Resolution ==========
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    },
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,

    // ========== Experimental Features ==========
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,

    // ========== JS-related options ==========
    "allowJs": false,
    "checkJs": false,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,

    // ========== Advanced Options ==========
    "resolveJsonModule": true,
    "isolatedModules": true,
    "assumeChangesOnlyAffectDirectDependencies": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}

// ========== EXPLANATION OF KEY OPTIONS ==========

/*
 * strict: true
 * - Enables all strict type checking options at once
 * - Equivalent to setting all the other strict* options to true
 *
 * noImplicitAny: true
 * - Error on variables/parameters with implicit 'any' type
 * - Requires explicit type annotations
 *
 * strictNullChecks: true
 * - null and undefined cannot be assigned to other types
 * - Must explicitly handle null/undefined cases
 * - Prevents many common runtime errors
 *
 * strictFunctionTypes: true
 * - Stricter function type checking
 * - Function parameter and return types must match exactly
 *
 * strictBindCallApply: true
 * - Stricter checking of bind, call, and apply methods
 *
 * strictPropertyInitialization: true
 * - Error if class properties are declared but not set in constructor
 *
 * noImplicitThis: true
 * - Error on 'this' with implicit 'any' type
 *
 * noImplicitReturns: true
 * - Function must return a value of declared type on all code paths
 *
 * noUnusedLocals: true
 * - Error on unused local variables (good for cleanup)
 *
 * noUnusedParameters: true
 * - Error on unused function parameters
 *
 * noFallthroughCasesInSwitch: true
 * - Error on fallthrough in switch statements without break
 *
 * declaration: true
 * - Generate .d.ts files for type definitions
 * - Essential for library distribution
 *
 * sourceMap: true
 * - Generate .map files for debugging
 * - Maps compiled JS back to original TypeScript
 *
 * esModuleInterop: true
 * - Allows import default from CommonJS modules
 * - Better compatibility with existing JS libraries
 *
 * skipLibCheck: true
 * - Skip type checking of declaration files (.d.ts)
 * - Speeds up compilation
 *
 * forceConsistentCasingInFileNames: true
 * - Error on files with inconsistent casing
 * - Important for case-sensitive file systems (Linux, Mac)
 */

// ========== EXAMPLE: WITH AND WITHOUT STRICT MODE ==========

// WITHOUT strict: false (lenient mode)
/*
let value; // Implicit any - no error
value.toUpperCase(); // Runtime error waiting to happen

function process(input) { // implicit any parameter
  return input.length;
}

let nullable = null;
nullable.toString(); // Runtime error

class User {
  name: string;
  // Property declared but not initialized in constructor - allowed
}
*/

// WITH strict: true (strict mode)
/*
let value: string; // Must explicitly type
value = "hello";
value.toUpperCase(); // Type-safe

function process(input: string) { // Must explicitly type
  return input.length;
}

let nullable: string | null = null;
if (nullable !== null) {
  nullable.toString(); // Type-safe
}

class User {
  name: string;
  
  constructor(name: string) {
    this.name = name; // Must initialize all properties
  }
}
*/

console.log("Strict Mode & Compiler Options Examples Loaded");

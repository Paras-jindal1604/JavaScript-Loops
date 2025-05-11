# 🔁 JavaScript Loops, Variable Scope & Property Descriptors – Deep Dive

This repository provides clear, structured, and in-depth explanations for three fundamental and often misunderstood concepts in JavaScript:

- Loops
- Variable Scope
- Property Descriptors (`enumerable`, `writable`, `configurable`)

These topics are crucial for writing predictable, performant, and maintainable code.

---

## 📌 Table of Contents

1. Loops in JavaScript
    - `for`, `while`, and `do...while`
    - `for...in` vs `for...of`
    - `break`, `continue`, and `return` usage
     
2. Scope of Variables]
    - Function Scope vs Block Scope
    - Global, Local, and Lexical Scope
    - `var` vs `let` vs `const`
    - Closures
      
3. Property Descriptors: Enumerable, Writable, Configurable
    - What are descriptors?
    - How they affect object behavior
    - When and why to use them

---

## 1. 🔁 Loops in JavaScript

### Basic Loop Types
- **`for` loop**: Traditional loop with initialization, condition, and iteration in one line.
- **`while` loop**: Runs as long as the condition is true, useful for unknown iteration counts.
- **`do...while` loop**: Executes at least once before checking the condition.

### Advanced Looping
- **`for...in`**: Iterates over enumerable property names (keys) of an object.
- **`for...of`**: Iterates over iterable values (arrays, strings, maps, etc.).

### Loop Control
- **`break`**: Exits the loop immediately.
- **`continue`**: Skips to the next iteration.
- **`return`**: Exits the entire function, if used inside a loop within a function.

---

## 2. 🌐 Scope of Variables

### Types of Scope
- **Global Scope**: Variables declared outside any block or function. Accessible everywhere.
- **Function Scope**: Created by `var`, available throughout the enclosing function.
- **Block Scope**: Introduced with `let` and `const`, accessible only within `{}` blocks.

### Variable Declarations
- **`var`**: Function-scoped, hoisted (but not initialized).
- **`let`**: Block-scoped, not hoisted in the same way.
- **`const`**: Block-scoped, must be initialized once, and cannot be reassigned.

### Lexical Scope
JavaScript uses lexical scoping, meaning a variable’s scope is determined by its position in the source code.

### Closures
A closure is a function that **remembers the scope** in which it was defined, even after that outer function has finished executing.
It allows powerful patterns like encapsulation and currying.

---

## 3. 🧬 Property Descriptors: `enumerable`, `writable`, `configurable`

JavaScript objects come with property attributes that control how the properties behave:

### 🔹 Enumerable
- **Determines if the property shows up during iteration** (like `for...in` or `Object.keys()`).
- Default: `true`.

### 🔹 Writable
- **Indicates if the property's value can be changed**.
- Default: `true`.

### 🔹 Configurable
- **Controls whether a property can be deleted or reconfigured (changing attributes)**.
- Default: `true`.

### Why Use These?
- Create immutable or read-only properties.
- Hide internal logic from external access or iteration.
- Enforce strong object encapsulation.

Understanding these descriptors gives you fine-grained control over how objects behave, especially in APIs and library code.

---

## 📚 Resources

- [MDN - Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN - Property Descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

---

## 👨‍💻 Author

Created by [Paras Jindal](https://github.com/Paras-jindal1604) as part of building a rock-solid foundation in core JavaScript concepts.

---


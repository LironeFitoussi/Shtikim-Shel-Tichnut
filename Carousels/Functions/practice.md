### Syntax and Basic Usage
1. **Syntax**: How do you declare a normal function? Provide an example.
2. **Syntax**: How do you declare an arrow function? Provide an example.
3. **Syntax**: What is the difference between a function declaration and a function expression in normal functions?
4. **Syntax**: How can you simplify an arrow function with a single parameter and a single expression?
5. **Syntax**: Can you convert the following normal function to an arrow function?
   ```javascript
   function multiply(a, b) {
       return a * b;
   }
   ```
6. **Syntax**: Write an arrow function that takes no parameters and returns the string "Hello, World!".

### `this` Keyword Behavior
7. **`this` Keyword**: In a normal function, what does the `this` keyword refer to when the function is called as a method of an object?
8. **`this` Keyword**: How does the behavior of the `this` keyword in an arrow function differ from that in a normal function?
9. **`this` Keyword**: Provide an example where a normal function and an arrow function produce different `this` values when used as methods in an object.
10. **`this` Keyword**: Explain why the following arrow function logs `undefined` instead of the expected object property:
    ```javascript
    const person = {
        name: "Lirone",
        greet: () => {
            console.log(this.name);
        }
    };
    person.greet();
    ```

### Arguments Object
11. **Arguments Object**: What is the `arguments` object in normal functions, and how is it used?
12. **Arguments Object**: Why do arrow functions not have an `arguments` object?
13. **Arguments Object**: Convert the following normal function to an arrow function and handle the arguments using rest parameters:
    ```javascript
    function add() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    ```

### Constructor Functions
14. **Constructor Functions**: How are normal functions used as constructors in JavaScript? Provide an example.
15. **Constructor Functions**: Why can't arrow functions be used as constructors?
16. **Constructor Functions**: What error do you get when you try to use an arrow function as a constructor?

### Methods and Arrow Functions
17. **Methods**: Why is it generally advised to use normal functions for object methods instead of arrow functions?
18. **Methods**: What will the following code output and why?
    ```javascript
    const person = {
        name: "Lirone",
        greet: function() {
            const innerGreet = () => {
                console.log(this.name);
            };
            innerGreet();
        }
    };
    person.greet();
    ```

### Function Binding
19. **Function Binding**: How do you use the `bind` method with normal functions to set the `this` context? Provide an example.
20. **Function Binding**: Why is the `bind` method irrelevant for arrow functions?

### Use Cases and Preferences
21. **Use Cases**: In what scenarios are arrow functions preferred over normal functions?
22. **Use Cases**: In what scenarios are normal functions preferred over arrow functions?
23. **Use Cases**: Write a normal function that calculates the factorial of a number.
24. **Use Cases**: Write an arrow function that filters an array of numbers to only include even numbers.

### Advanced Topics
25. **Advanced Topics**: How do arrow functions affect the performance of your JavaScript code, if at all?
26. **Advanced Topics**: How do closures work with arrow functions compared to normal functions?
27. **Advanced Topics**: Explain how arrow functions can be used effectively in asynchronous programming (e.g., with Promises).

### Practical Examples
28. **Practical Examples**: Convert the following normal function callback in an array method to an arrow function:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(function(num) {
        return num * num;
    });
    ```
29. **Practical Examples**: Write a normal function and an arrow function that both achieve the same result: doubling the elements of an array.
30. **Practical Examples**: Explain the output of the following code:
    ```javascript
    const obj = {
        value: 10,
        increment: function() {
            return () => {
                this.value++;
                return this.value;
            };
        }
    };
    const incrementer = obj.increment();
    console.log(incrementer()); // What is the output and why?
    ```
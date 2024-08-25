(function() {
    // Your code here
    console.log("This is an IIFE!");
})();


(function(name) {
    console.log("Hello, " + name);
})("JavaScript");

// Output: Hello, JavaScript


const result = (function() {
    const secret = "I am private";
    return {
        share: function() { console.log(secret); }
    };
})();

result.share(); // Output: I am private


{
    let privateVar = "I'm block-scoped";
}
// privateVar is not accessible here
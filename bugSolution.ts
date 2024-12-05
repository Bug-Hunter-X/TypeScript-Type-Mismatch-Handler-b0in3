function greeter(person: string): string; // Overload signature
function greeter(person: string[]): string; // Overload signature
function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person + "!";
  } else {
    return "Hello, " + person.join(', ') + "!";
  }
}

let user = ["Tom", "Jerry"];
console.log(greeter(user)); //This will now correctly greet each person in the array
console.log(greeter("Alice")); //This will greet Alice correctly
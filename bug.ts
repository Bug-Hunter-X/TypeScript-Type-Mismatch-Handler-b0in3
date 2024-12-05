function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

let user = ["Tom", "Jerry"];
console.log(greeter(user)); //This will cause an error because the function expects a string and not an array of strings.
console.log(`'foo' name ${"foo" in globalThis ? "is" : "is not"} global. typeof foo is ${typeof foo}`);
if (false) {
  function foo() { return 1; }
}

// In Chrome:
// 'foo' name is global. typeof foo is undefined
//
// In Firefox:
// 'foo' name is global. typeof foo is undefined
//
// In Safari:
// 'foo' name is global. typeof foo is function

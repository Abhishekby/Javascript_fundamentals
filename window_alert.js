let text = "Hello World!";
let encoded = window.btoa(text);
let decoded = window.atob(encoded);
//The atob() method decodes a string that has been encoded by the btoa() method.

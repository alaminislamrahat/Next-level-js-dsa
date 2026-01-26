import Stack from "./Stack.js";


//bracket check input and output 
//"(){}[]" => true
//"({[]})" => true
//"(}" => false
//"[(])" => false
//"[" => false

const bracketChecker = (str) => {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        console.log(element)
    }
}

console.log(bracketChecker("(){}[]"))
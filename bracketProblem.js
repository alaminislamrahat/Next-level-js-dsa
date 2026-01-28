import Stack from "./Stack.js";


//bracket check input and output 
//"(){}[]" => true
//"({[]})" => true
//"(}" => false
//"[(])" => false
//"[" => false

const bracketChecker = (str) => {
    const stack = new Stack();
    const bracketMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // console.log(char)

        if(char === "(" || char === "{" || char === "["){
            stack.push(char)
        }else if(char === ")" || char === "}" || char === "]"){
            if(stack.isEmpty() || stack.pop() !== bracketMap[char]){
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(bracketChecker("({[]})"))
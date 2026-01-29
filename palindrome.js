// palindrom means the same forwards and backwards like "racecar" or "level"
const isPalindrome = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversed = normalized.split('').reverse().join('');


    if (normalized === reversed) {
        return true;
    }

    return false;
}


// console.log(isPalindrome("Racecara")); // true

const isPalindromeTwoPointer = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = normalized.length - 1;
    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;

    }
    return true;
}


console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama")); // true
let string = "I love cryptography!";
// let string = "bcdfghjklmnpqrstvwxyz"

const cipher = string => {
    let revowels = /[aeiou]/i
    let reconst = /[bcdfghjklmnpqrstvwxyz]/i
    let respecial = /\W/i
    let ciphered = string.split('');

    for (let i = 0; i < string.length; i++) {
        if (revowels.test(string[i])) {
            let charCode = string.charCodeAt(i);
            charCode += 3;
            ciphered[i] = String.fromCharCode(charCode);
        } else if (reconst.test(string[i])) {
            let charCode = string.charCodeAt(i);
            charCode -= 3;
            ciphered[i] = String.fromCharCode(charCode);
        } else if (respecial.test(string[i])) {
            let charCode = string.charCodeAt(i);
            charCode += 5;
            ciphered[i] = String.fromCharCode(charCode);
        }
    }
    return ciphered.join('');
}

console.log(cipher(string));

const decipher = string => {
    let cipherVowels = /[dhlrx]/i
    let cipherConsts = /[_`acdeghijkmnopqstuvw]/i
    let deciphered = string.split('');

    for (let i = 0; i < string.length; i++) {
        if (cipherVowels.test(string[i])) {
            let charCode = string.charCodeAt(i);
            charCode -= 3;
            deciphered[i] = String.fromCharCode(charCode);
        } else if (cipherConsts.test(string[i])) {
            let charCode = string.charCodeAt(i);
            charCode += 3;
            deciphered[i] = String.fromCharCode(charCode);
        } else {
            let charCode = string.charCodeAt(i);
            charCode -= 5;
            deciphered[i] = String.fromCharCode(charCode);
        }
    }
    return deciphered.join('');
}

console.log(decipher(cipher(string)));
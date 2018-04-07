// Module for app.js helper functions

/**
 *  Generates a random number
 * @param {Int} max 
 */
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Creates a specified random string
 * @param {String} stringLength 
 */
const makeWalletKey = (stringLength) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < stringLength; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

/**
 * Generates an object containing a private and public key as well as the number of 
 * educoins
 */
const generateWallet = () => {
    return {
        privateKey: makeWalletKey(26),
        publicKey: makeWalletKey(26),
        amount: getRandomInt(1000)
    };
}

/**
 * Creates a specified number of students with created wallets
 * @param {Int} numStudents 
 */
const generateStudents = (numStudents) => {
    let students = {}
    for (let x = 1; x <= 5; x++) {
        students[`student${x}`] = generateWallet();
    }
    return students
}

exports.generateStudents = generateStudents;
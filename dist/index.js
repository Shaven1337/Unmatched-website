"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("#core/utils");
const test = "This should trigger an ESLint error"; // Ошибка ESLint
async function testFunction() {
    return true;
}
testFunction(); // Ошибка ESLint (вызов без await)
console.log((0, utils_1.getMessage)());

import { getMessage } from "#core/utils.js";

const test: any = "This should trigger an ESLint error"; // Ошибка ESLint

async function testFunction() {
  return true;
}

testFunction(); // Ошибка ESLint (вызов без await)

console.log(getMessage());
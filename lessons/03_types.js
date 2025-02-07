console.log("3.1");
console.log("\nПривмітивні типи:");
console.log("undefined:", typeof undefined);
console.log("null:", typeof null); // "object" (из-за бага в JS)
console.log("boolean:", typeof true);
console.log("number:", typeof 42);
console.log("bigint:", typeof 9007199254740991n);
console.log("string:", typeof "Hello, JS!");
console.log("symbol:", typeof Symbol("id"));

console.log("\nСкладні типи:");
console.log("object: ", typeof { key: "value" });
console.log("array (також object): ", typeof [1, 2, 3]);
console.log("array (Array.isArray). Перевірка, що об'єкт є массивом: ", Array.isArray([1, 2, 3]));
console.log("function (підтип object): ", typeof function() {});

console.log("\n\n3.2");
const str1 = prompt("Введіть перший рядок:");
const str2 = prompt("Введіть другий рядок:");
const str3 = prompt("Введіть третій рядок:");
const array = [str1, str2, str3]
    .map(value => ({ value, sort: Math.random() })) // Create array of object
    .sort((a, b) => a.sort - b.sort) // Sort by random value
    .map(obj => obj.value); // Remove random value

console.log(`${array[0]}\n${array[1]}\n${array[2]}`);

console.log("\n\n3.3");
const number = prompt("Введіть п'ятизначне число:");
if (number.length === 5 && !isNaN(number)) console.log(number.split("").join(" "));
else console.log("Будь ласка, введіть коректне п'ятизначне число.");

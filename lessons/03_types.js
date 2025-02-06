console.log("3.1");
console.log("\nПривмітивні типи:");
console.log("undefined:", undefined);
console.log("null:", null); // "object" (из-за бага в JS)
console.log("boolean:", true);
console.log("number:", 42);
console.log("bigint:", 9007199254740991n);
console.log("string:", "Hello, JS!");
console.log("symbol:", Symbol("id"));

console.log("\nСкладні типи:");
console.log("object: ", { key: "value" });
console.log("array (також object): ", [1, 2, 3]);
console.log("function (підтип object): ", function() {});

console.log("\n\n3.2");
const str1 = prompt("Введіть перший рядок:");
const str2 = prompt("Введіть другий рядок:");
const str3 = prompt("Введіть третій рядок:");
console.log(`${str3}\n${str1}\n${str2}`);

console.log("\n\n3.3");
const number = prompt("Введіть п'ятизначне число:");
if (number.length === 5 && !isNaN(number)) console.log(number.split("").join(" "));
else console.log("Будь ласка, введіть коректне п'ятизначне число.");

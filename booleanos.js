console.log("Os tipos verdadeiros...");

console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('------------------------');
console.log("Os tipos falsos...");

console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log("-----------------------------")
console.log("As expressões....")
// Como estamos usando OU, só precisamos ter uma expressão verdadeira para que a sentença seja considerada TRUE
console.log(!!("" || null || 0 || " "))
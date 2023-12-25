// Variables, types JS, AND OR, If else, ternary operator

const x = 10;
const y = 5;
const amount = x + y;
console.log(amount);

const firstName = "Izajasz";
const welcome = `Hello ${firstName}`;
console.log(welcome);

const length = 13;
const width = 8;
const field = (length * width);
console.log(`${field}` + 'cm');

const quantity = 0;
const text = "Izajasz";
console.log(quantity, typeof quantity);
console.log(text, typeof text);

let colors = ["red", "yellow", "blue"];
console.log(colors);

const firstName1 = "Izajasz";
const age = 17;
console.log(firstName1, age);

const data = 'some_data';
console.log(!!data, 'test');
if(data && !!data) {
    console.log("Poprawnie załadowano dane");
}
else {
    console.log("Brak danych do wyświetlenia");
}

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Losowana liczba: ${randomNumber}`);
if (randomNumber <=5) {
    console.log('Wartość zmiennej jest z przedziału od 1 do 5');
}
else {
    console.log('Wartość zmiennej jest z przedziału od 6 do 10');
}

const nam = '1';
const result = 1 == nam ? 'one' : 'two';
console.log(result);
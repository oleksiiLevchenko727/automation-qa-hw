///
const car1 = {
    brand: "BMW",
    model: "G60",
    year: 2024
};

const car2 = {
    brand: "Audi",
    model: "A4",
    owner: "Alex"
};

const car3 = {...car1, ...car2};

console.log(car3);
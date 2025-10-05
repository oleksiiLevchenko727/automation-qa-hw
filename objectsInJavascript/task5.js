const person = [
{
    name: "Evgeniy",
    email: "evgeniy.mikhaylenko@mail.ua",
    age: "31",
    city: "Dnipro",
    street: "Naberezhna Peremohy"
},
{
    name: "Ruslan",
    email: "ruslan.pasickyk@mail.ua",
    age: "22",
    city: "Dnipro",
    street: "Naberezhna Peremohy"
},
{
    name: "Vladislav",
    email: "vlad.vlasov@mail.ua",
    age: "28",
    city: "Dnipro",
    street: "Voskresenska"
},
{
    name: "Yegor",
    email: "yehor.grotevich@mail.ua",
    age: "21",
    city: "Dnipro",
    street: "Shevchenko"
}
]

for (const {name, email, age, city, street } of person) {
    console.log(`
        User name is: "${name}"
        Email is: ${email}
        Age is: ${age} 
        City is: ${city}
        Street is: ${street}`)
}
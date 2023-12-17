let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

const copied = structuredClone(passportWithAddress)
copied.address.city = 'Bobryisk'
console.log(passportWithAddress.address.city)
console.log(copied.address.city)
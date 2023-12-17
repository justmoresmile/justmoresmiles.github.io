let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let clonePassportMarried = structuredClone(passportMarried)

clonePassportMarried.married = true;
console.log(passportMarried);
console.log(clonePassportMarried)

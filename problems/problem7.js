//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function problem7(arrayOfObjects) {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        const name = arrayOfObjects[i].name;
        const email = arrayOfObjects[i].email;
        const age = arrayOfObjects[i].age;
        if (age == 25) {
            return `Name:${name} Email:${email}`;
        }
    }
}

module.exports = problem7;
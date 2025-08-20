//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function problem4(arrayOfObjects) {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        const name = arrayOfObjects[i].name
        const city = arrayOfObjects[i].city
        if (i == 3) {
            return `Name:${name} City:${city}`
        }
    }
}

module.exports = problem4;
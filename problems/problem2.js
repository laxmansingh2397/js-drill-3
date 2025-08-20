//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function problem2(arrayOfObjects) {
    const hobbies = {}
    for (let i = 0; i < arrayOfObjects.length; i++) {
        let age = arrayOfObjects[i].age
        let hobbie = arrayOfObjects[i].hobbies
        if (age == 30) {
            hobbies[age] = hobbie
        }
    }
    return hobbies
}

module.exports = problem2;
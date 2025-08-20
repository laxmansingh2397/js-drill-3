//    Implement a loop to access and print the ages of all individuals in the dataset.

function problem5(arrayOfObjects) {
    const age = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        age.push(arrayOfObjects[i].age)
    }
    return age;
}

module.exports = problem5;
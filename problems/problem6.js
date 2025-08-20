//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function problem6(arrayOfObjects) {
    const personAndHobbies = {};
    for (let i = 0; i < arrayOfObjects.length; i++) {
        const name = arrayOfObjects[i].name;
        const hobbie = arrayOfObjects[i].hobbies[0];
        personAndHobbies[name] = hobbie
    }
    return personAndHobbies;
}

module.exports = problem6;
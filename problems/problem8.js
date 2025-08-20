//    Implement a loop to access and log the city and country of each individual in the dataset.

function problem8(arrayOfObjects) {
    for (let person of arrayOfObjects) {
        console.log(`City: ${person.city}, Country: ${person.country}`);
    }
}

module.exports = problem8
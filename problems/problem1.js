//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.


function problem1(arrayOfObjects) {
    let emailArray = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        emailArray.push(arrayOfObjects[i].email)
    }
    return emailArray
}

module.exports = problem1;
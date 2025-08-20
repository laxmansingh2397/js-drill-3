//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function problem3(arrayOfObjects) {
    const students = {};
    for (let i = 0; i < arrayOfObjects.length; i++) {
        const student = arrayOfObjects[i].isStudent;
        const name = arrayOfObjects[i].name;
        const country = arrayOfObjects[i].country;
        if (student && country == "Australia") {
            students[name] = country;
        }
    }
    return students;
}

module.exports = problem3;
// We've defined a function countOnline which accepts 
// one argument, allUsers. Use a for...in statement inside
//  this function to loop through the allUsers object and return 
//  the number of users whose online property is set to true. An 
//  example of an object which could be passed to countOnline is
//   shown below. Each user will have an online property set to either true or false.


const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    // Only change code below this line
    let i = 0
    for (const key in allUsers) {
        if (allUsers[key].online === true) {
            i++
        }
    }
    return i

    // Only change code above this line
}

console.log(countOnline(users));

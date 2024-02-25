// function formatDate(date) {
//     const d = new Date(date);
//     let month = '' + (d.getMonth() + 1);
//     let day = '' + d.getDate();
//     const year = d.getFullYear();

//     if (month.length < 2) {
//         month = '0' + month;
//     }
//     if (day.length < 2) {
//         day = '0' + day;
//     }
//     return [year, month, day].join('-');
// }

// console.log(formatDate(new Date()));


let val
let presentDate
let dateOfBirth
let age

const result = document.getElementsByClassName("results")[0]

function onClick(elem) {
    var parent = elem.parentNode
    val = parent.querySelector('input[type=date]').value
    if (val == null || val == '') {
        // console.log('no dob found');
        result.innerHTML = `<p>Empty DOB!!! Please provide your date of birth.</p>`
        return;
    }

    presentDate = new Date()
    dateOfBirth = new Date(val)
    // console.log(presentDate-dateOfBirth);

    if (presentDate < dateOfBirth) {
        // console.log('Invalid DOB!!! Please enter a valid date.');
        result.innerHTML = `<p>Invalid DOB!!! Please enter a valid date.</p>`
        return
    }

    age = presentDate - dateOfBirth
    msToDate(age)
}


function msToDate(msec) {
    seconds = Math.floor(msec / 1000)
    minutes = Math.floor(seconds / 60)
    hours = Math.floor(minutes / 60)
    days = Math.floor(hours / 24)
    months = Math.floor(days / 30)
    years = Math.floor(days / 365)


    seconds = seconds % 60
    minutes = minutes % 60
    hours = hours % 24
    days = days % 30
    months = months % 12

    result.innerHTML = `<p>Your age is ${years} years, ${months} months, and ${days} days.</p>`

    // console.log(result);
    // console.log('Years', years);
    // console.log('Months',months);
    // console.log('Days', days);
    // console.log('Hours', hours);
    // console.log('Minutes', minutes);
    // console.log('Seconds', seconds);
}



var button = document.getElementById('calc');
button.addEventListener("click", function () {
    onClick(this);
});



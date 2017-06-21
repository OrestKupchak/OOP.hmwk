
function SuperUser() { //some class Super
    alert('I\'m a super User')
}

function User(name, gender, date, adress, phone, email) { //create constructor for User instances
    this.name = name;
    this.gender = gender;
    this.date = date;
    this.adress = adress;
    this.phone = phone;
    this.email = email;
}

User.prototype = SuperUser.prototype; //set inheritance from SuperUser

function saveInfo() { //save inputed info after validation of data in each input
    if (validation()) { //if valid we add new Person
        var newPerson = addNewUser()
        renderNewPerson(newPerson);
        resetInfo();
    }
}

function resetInfo() { //reset all data in input fields after adding new Person or click on reset button
    $('.form')[0].reset()
}

function addNewUser() { //create new instance using User constructor and values inserted into input fields
    var name = $('#name').val();
    var gender = $('.gender:checked').val();
    var date = $('#birth').val();
    var adress = $('#address').val();
    var phone = $('#phone').val();
    var email = $('#email').val();

    var newPerson = new User(name, gender, date, adress, phone, email);
    return newPerson;
}

function renderNewPerson(newPerson) { //add new User iinfi into table as a new row
    $('tbody').append('<tr />');
    $('tr:last').append(`<td>${newPerson.name}</td>`).append(`<td>${newPerson.gender}</td>`)
        .append(`<td>${newPerson.date}</td>`).append(`<td>${newPerson.adress}</td>`)
        .append(`<td>${newPerson.phone}</td>`).append(`<td>${newPerson.email}</td>`)
}


function validation() { //check all fields on nonvalid data
    if ((checkNames() === true) &&
        (checkGender() === true) &&
        (checkBirth() === true) &&
        (checkAddress() === true) &&
        (checkPhone() === true) &&
        (checkEmail() === true)) {
        return true
    }
};
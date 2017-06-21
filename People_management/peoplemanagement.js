function SuperUser() {
  alert('I\'m a super User')
}

function User(name, gender, date, adress, phone, email) { //create constructor for User instances
  this.name = name;
  this.gender = gender;
  this.date = date;
  this.adress = adress;
  this.phone = phone;
  this.email = email;
  this.isDataVisible = true;
}

User.prototype = SuperUser.prototype; //set inheritance of changeDataVisibility() method from SuperUser


var listOfPersons = []; //array of persons info
var rows = $('tbody').children(); //amount of all rows in table

function saveInfo() {         //save inputed info< after validation of data in each input
  if (validation()) {         //if valid we add new Person
    var newPerson = addNewUser();
    listOfPersons.push(newPerson);

    renderNewPerson(newPerson);
    resetInfo();
    rows = $('tbody tr');
  }
}

function resetInfo() { //reset all data in input fields after adding new Person or click on reset button
  $('.form')[0].reset()
}

function addNewUser() {        //create new instance using User constructor and values inserted into input fields
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

$('tbody').on('click', 'tr', function() {
  index = this.rowIndex - 1;
  //hide row exept this
  hideAndShowRows();

  //hide columns exept name
  for (var i = 1; i < this.cells.length; i++) {
    if($(this.cells[i]).is(':visible')) {
      $(this.cells[i]).hide();
    } else {
      $(this.cells[i]).show();
    }
  }
});


function checkNames() {
  var isValid = false;
  var name = $("#name").val();
 var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
 if (spacesPattern.test(name) || name.length === 0) {
      alert('Some fields are empty');
      return;
  }
  else if (name.length < 2){
    alert('Name seems to be too short');
  }
    else  if (name.length > 25) {
    alert('Nmae seems to bee too long');
  } else if (name.match(/^[-\+]?\d+/)) {
    alert('Nope, no numbers allowed');
  } else if (!/^[A-z]+$/.test(name)) {
    alert('Nope, use only letters');
  }
  isValid = true
  return isValid;
}

function checkGender() {
  var isValid = false;
  var sex = $('.gender:checked').val();
  if(sex === undefined) {
    alert('Enter your gender, please');
  }
  isValid = true;
  return isValid;
}

function checkEmail() {
  var isValid = false;
  var email = $("#email").val();
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
  if (spacesPattern.test(name) || email.length === 0) {
       alert('Some fiealds are empty');
         return;
   }
  else if (!pattern.test(email)) {
    alert('Email is not valid. Enter \'your.email@mail.com \'');
  }
  isValid = true
  return isValid;
}



function checkBirth() {
  var isValid = false;
  var date = $("#birth").val();
  var pattern = /^(([0-2]{1}\d|(3[0-1]))\/((0\d)|(1[0-2]))\/\d{4})$/g;
  var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
  if (spacesPattern.test(date) || date.length === 0) {
       alert('Some fields are empty');
         return;
   }
  else if (!date.match(pattern)) {
    alert('Birth date should be in format DD/MM/YYYY');
  }
  isValid = true
  return isValid;
}

function checkAddress() {
  var isValid = true;
  var address = $("#address").val();
  var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
  if (spacesPattern.test(address) || address.length === 0) {
       alert('Some fields are empty');
         return;
   }
   isValid = true;
  return isValid;
}

function checkPhone() {
  var isValid = false;
  var phone = $("#phone").val();
  var pattern = /^[0-9]{12}$/;
  var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
  if (spacesPattern.test(phone) || phone.length === 0) {
       alert('Some fields are empty');
         return;
   }
  else if(phone.match(pattern) === null) {
    alert('Check ypue number! Should contain 12 chars');
    } else if (phone.indexOf('380') != "0") {
    alert('Enter number using intenational format 380xxxxxxxxx');
  }
      isValid = true;
  return isValid;
}

function validation() {
  var succes = checkNames() && checkGender() && checkBirth() && checkAddress() && checkPhone() && checkEmail();
  return succes
};

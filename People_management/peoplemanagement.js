function SuperUser() {
SuperUser.prototype.changeDataVisibility = function() {
  return this.isDataVisible = !this.isDataVisible;
  }
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


//$('#button').click(
function saveInfo() {         //save inputed info< after validation of data in each input
  if (validation()) {         //if valid we add new Person
    var newPerson = addNewUser();
    listOfPersons.push(newPerson);

    renderNewPerson(newPerson);
    resetInfo();
    rows = $('tbody tr');
  }
}

function resetInfo() { //reset all data in input fields after adding new Person
  $('.form')[0].reset()
}

function addNewUser() {
  var name = $('#name').val();
  var gender = $('.gender:checked').val();
  var date = $('#birth').val();
  var adress = $('#adress').val();
  var phone = $('#phone').val();
  var email = $('#email').val();

  var newPerson = new User(name, gender, date, adress, phone, email);
  return newPerson;
}


function renderNewPerson(newPerson) {
  $('tbody').append('<tr />');
  $('tr:last')
      .append(`<td>${newPerson.name}</td>`)
      .append(`<td>${newPerson.gender}</td>`)
      .append(`<td>${newPerson.date}</td>`)
      .append(`<td>${newPerson.adress}</td>`)
      .append(`<td>${newPerson.phone}</td>`)
      .append(`<td>${newPerson.email}</td>`)
    
}


function visibility() {
  for (var i = 0; i < listOfPersons.length; i++) {
    if (i === index) {
      continue;
    }
    listOfUsers[i].changeDataVisibility();
    if (listOfUsers[i].isDataVisible == false) {
      $('tbody tr:eq('+ i +')').hide();
    } else {
       $('tbody tr:eq('+ i +')').show();
    }
  }
}



function checkNames() {
  var isValid = false;
  var name = $("#name").val();
  if (name.length < 2){
    alert('Name seems to be too short');
  }
   if (name.length > 25) {
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
    isValid = false;
  }

  return isValid;
}

function checkEmail() {
  var isValid = true;
  var $email = $("#email");
  //Email should be in format example@mail.
  var pattern = /([\w\.-]+@[a-z0-9-]+\.[a-z]{2,6})/g;

  if ($email.val().match(pattern) !== 0) {
    alert('Email is not valid. Enter \'expamle@gmail.com \'');
    isValid = false;
  }
  return isValid;
}


function checkBirth() {
  var isValid = true;
  var date = $("#birth").val();
  var pattern = /^(([0-2]{1}\d|(3[0-1]))\/((0\d)|(1[0-2]))\/\d{4})$/g;

  if (!date.match(pattern)) {
    alert('Birth date should be in format DD/MM/YYYY');
    isValid = false;
  }

  return isValid;
}

function checkAddress() {
  var isValid = true;
  var adress = $("#adress").val();

  if(adress === "") {
    alert('Adress sould be filled!');
    isValid = false
  }

  return isValid;
}

function checkPhone() {
  var isValid = true;
  var phone = $("#phone").val();
  var pattern = /^[0-9]{12}$/;
  if(phone.match(pattern) === null) {
    alert('Phone is not valid! Max 10 symbols');
    isValid = false;
  } else if (phone.indexOf('380') != "0") {
    alert('Enter number using intenational format 380xxxxxxxxx');
    isValid = false;
  }
  return isValid;
}

function validation() {
  var succes = checkNames() && checkGender() && checkBirth() && checkAddress() && checkPhone() && checkEmail();
  return succes
};

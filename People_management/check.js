function checkNames() {
    var checked = false;
    var name = $("#name").val();
    var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
    if (spacesPattern.test(name) || name.length === 0) {
        alert('Some fields are empty');
        return;
    } else if (name.length < 2) {
        alert('Name seems to be too short');
    } else if (name.length > 25) {
        alert('Nmae seems to bee too long');
    } else if (name.match(/^[-\+]?\d+/)) {
        alert('Nope, no numbers allowed');
    } else if (name.match(/^[A-z]+$/) != null) {
        alert('Nope, use only letters');
    }
    checked = true
    return checked;
}

function checkGender() {
    var checked = false;
    var sex = $('.gender:checked').val();
    if (sex === undefined) {
        alert('Enter your gender, please');
        return
    }
    checked = true;
    return checked;
}

function checkEmail() {
    var checked = false;
    var email = $("#email").val();
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
    if (spacesPattern.test(name) || email.length === 0) {
        alert('Some fiealds are empty');
        return;
    } else if (!pattern.test(email)) {
        alert('Email is not valid. Enter \'your.email@mail.com \'');
        return
    }
    checked = true
    return checked;
}


function checkBirth() {
    var checked = false;
    var date = $("#birth").val();
   var pattern = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
    var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
    if (spacesPattern.test(date) || date.length === 0) {
        alert('Some fields are empty');
        return;
    } else if (!date.match(pattern)) {
        alert('Birth date should be in format DD/MM/YYYY');
        return
    }
    checked = true
    return checked;
}

function checkAddress() {
    var checked = true;
    var address = $("#address").val();
    var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
    if (spacesPattern.test(address) || address.length === 0) {
        alert('Some fields are empty');
        return;
    }
    checked = true;
    return checked;
}

function checkPhone() {
    var checked = false;
    var phone = $("#phone").val();
    var pattern = /^[0-9]{12}$/;
    var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
    if (spacesPattern.test(phone) || phone.length === 0) {
        alert('Some fields are empty');
        return;
    } else if (phone.match(pattern) === null) {
        alert('Check ypue number! Should contain 12 chars');
        return
    } else if (phone.indexOf('380') != "0") {
        alert('Enter number using intenational format 380xxxxxxxxx');
        return
    }
    checked = true;
    return checked;
}
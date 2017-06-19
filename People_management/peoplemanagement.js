function User(name, sex, date, adress, phone, email) {
  this.name = name;
  this.sex = sex;
  this.date = date;
  this.adress = adress;
  this.phone = phone;
  this.email = email;

  this.isDataVisible = true;
}

User.prototype = SuperUser.prototype;


function SuperUser() {
  this.changeDataVisibility = function() {
    return this.isDataVisible = !this.isDataVisible;
}

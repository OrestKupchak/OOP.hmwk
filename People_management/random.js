

function randomInfo(){

var names = ['Robert', 'Ned', 'Jhon', 'Tirion', 'Jamie', 'Sersey', 'Arya', 'Sansa', 'Petir', 'Reyegar']
var surnames = ['Targarien', 'Mormont', 'Stark', 'Tirell', 'Lannister', 'Arren']
var dates = ['11/11/1990', '03/05/1991', '27/04/1992', '01/01/1993','22/03/1997', '12/10/2003']
var addresses = ['Winterfell', 'Highgarden', 'Dorn', 'Braavos', 'Oldtown', 'Lannisport']
var phones = ['380630000911', '380070000007','380273460809', '380674566777', '380444312211']
var mail = ['winter.coming@westeros.com']

	$('#name').val(names[Math.round(Math.random() * names.length)] + ' ' + surnames[Math.round(Math.random() * surnames.length)]);
  $('#birth').val(dates[Math.round(Math.random() * dates.length)])
  $('#address').val(addresses[Math.round(Math.random() * addresses.length)])
  $('#phone').val(phones[Math.round(Math.random() * phones.length)])
	$('#email').val(mail[0])
	randomSex()

	function randomSex(){
		var arr = $('.gender')
		arr[Math.round(Math.random()*arr.length)].checked = true;
	}
}
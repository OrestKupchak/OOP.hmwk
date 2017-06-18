/*
function Supermarket() {

	this.find = function(name){
		if (item.name != name){
			return 'Sorry, we don\'t sell' + item.name;
		}
		return 'You can find ' + item.name + 'on place ' + item.place;
	} 

	this.getWeight = function(name){
		if (this.find) {
			return item.getWeight()
		}
	}

	this.buyItem = function() {
		if (this.find) {
			return this.getWeight * product.price
		}
	}
*/


function Item(price, weight, place) {
	this.price = price;
	this.weight = weight;
	this.place = place ;
}

	Item.prototype.getWeight = function(){
		return this.weight
	}

	Item.prototype.getBill = function(){
		return this.price
	} 


function storeDepartments(){
	var places = ['grocery', 'seafood', 'alcohol','meat' ]
	var place = places[Math.round(Math.random()*places.length)]
	return place
}

function costs(){
	  var price = Math.random()*100;
    return price;
}

function scale(){
	 var weight = Math.random()*15;
   return weight;
}

(function() {
  var items = [];
  var prices = [];
  var weights = [];
  var totalSpend = 0;
  for (var i = 0; i < 15; i++) {
    items.push(new Item(storeDepartments(), costs(), scale()));
    console.log(items[i]);
    prices.push(items[i].getBill());
    weights.push(items[i].getWeight());
    totalSpend += items[i].getBill();
}
  console.log("Price of each item: " + prices);
  console.log("Weight of each item: " + weights);
  console.log("You spend : $" + totalSpend);
	document.body.createElement('div')
	document.querySelector('div').innerText = 

})();

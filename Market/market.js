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


function Item(name, price, weight, place) {
	this.name =
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

	function itemNames(){
		var names = ['bottle', 'fish', 'vodka','steak', 'whisky', 'potato', 'strawberry',
		 						 'banana', 'ice-cream', 'beer', 'bread', 'pineapple', 'spaghetti', 'olive',
							   'tea', 'cheese', 'sauce', 'oysters', 'milk', 'cake', 'candies', 'coffee']
		var name = names[Math.round(Math.random()*names.length)]
		return name
	}


function storeDepartments(){
	var places = ['grocery', 'seafood/meat', 'alcohol', 'fruits/vegetables', 'cheese/milk', 'bakery', 'sweets' ]
	var place = places[Math.round(Math.random()*places.length)]
	return place
}

function costs(){
	  var price = (Math.random()*100).toFixed(2);
    return price;
}

function scale(){
	 var weight = (Math.random()*15).toFixed(2);
   return weight;
}

function generateList(){


	var names = []
  var items = [];
  var prices = [];
  var weights = [];
  var totalSpend = 0;
  for (var i = 0; i < 15; i++) {
    items.push(new Item(itemNames(), costs(), scale(), storeDepartments()));
    console.log(items);
    //prices.push(items[i].getBill());
//weights.push(items[i].getWeight());
    totalSpend += items[i].getBill();
}
	$('tbody').append('<tr />');
	$('tr:last').append(`<td>${items[i].name}</td>`)
  //console.log("Price of each item: " + prices);
//  console.log("Weight of each item: " + weights);
  //console.log("You spend : $" + totalSpend);
}

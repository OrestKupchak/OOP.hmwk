function Item(name, price, weight, place) {
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.place = place;
}

Item.prototype.getWeight = function() {
    return this.weight
}

Item.prototype.getBill = function() {
    return this.price
}

function itemNames() {
    var names = [
        'bread', ' white bread', ' whole wheat bread', ' rye bread', ' raisin bread', ' garlic bread',
        ' sourdough bread', ' French bread', ' French loaf', ' pita bread', ' tortilla', ' Rolls', ' buns', 'roll',
        ' bread roll', ' sesame roll', ' poppy seed roll', ' cinnamon roll', ' hamburger bun', ' hot dog bun',
        ' crescent roll', ' croissant', ' bagel', 'Thin crispy breads', ' cracker', ' biscuit', ' cookie', ' toast',
        ' breadstick', ' pretzel', ' hardtack ', ' ship biscuit', ' wafer', ' waffle', ' crouton', 'cake', ' shortcake',
        ' fruitcake', ' strawberry shortcake', ' coffee cake', ' chocolate chip cake;', 'blueberry muffin', ' raisin muffin',
        ' cupcake', ' brownie', ' oatmeal cookie', ' chocolate cookie', ' gingerbread;', 'Cake', '', 'cake', ' birthday cake',
        ' wedding cake', ' Christmas cake', ' chocolate cake', ' honey cake', ' cheesecake', ' layer cake', ' napoleon', ' sponge cake',
        ' torte', ' ', 'pastry', ' home-made pie', ' apple pie', ' blueberry pie', ' tart', ' mince pie', ' meat pie', ' knish', ' pizza',
        ' doughnut', ' muffin', ' fritters', ' pancakes', ' waffles', ' poultry', ' fish ', 'meat', ' beef', ' pork', ' veal', ' lamb',
        ' mutton', 'beef steak', ' roast beef', ' ground beef', ' hamburgers', ' cutlets', ' spare ribs', ' pork chops', ' lamb chops',
        ' veal cutlets', 'ham', ' bacon', ' pastrami', ' corned beef', ' sausage', ' salami', ' smoked sausage', ' Bologna; hot dogs',
        ' link sausages', ' frankfurters', ' wieners', 'poultry', ' chicken', ' turkey', ' goose', ' duck', 'whole chicken',
        ' chicken quarters', ' chicken leg', ' drumstick', ' chicken breast', ' turkey breast', ' eggs', ' fish', ' salmon',
        ' trout', ' sturgeon', ' cod', ' sole', ' flatfish', ' pike', ' halibut', ' tuna', ' perch', ' sea bass', ' herring',
        ' eel', ' mackerel;', 'fish steak', ' salmon steak', ' fish fillet', ' fillet sole', ' smoked fish', ' salted fish',
        ' marinated herring', ' caviar', ' shrimp', ' prawns', ' crab', ' lobster', ' oysters', ' clams', ' shellfish',
        ' squid', ' milk', ' whole milk', ' skim milk', ' low-fat milk', ' nonfat milk', ' pasteurized milk', ' dry milk',
        ' condensed milk', ' yogurt', ' kefir', ' sour milk', ' buttermilk', ' cream', ' sour cream', ' butter', ' cottage cheese',
        ' farmers', ' cheese', ' homemade cheese', ' cream cheese', ' cheese', ' Swiss cheese', ' Parmesan', ' Cheddar',
        ' Mozzarella', ' Roquefort', ' blue cheese', ' hard cheese', ' soft cheese', ' sharp cheese', ' mild cheese',
        ' smoked cheese', ' grated cheese', ' cheese spread', ' Ice cream', 'ice cream', ' sundae', ' vanilla ice cream',
        ' chocolate ice cream', ' ice cream cone', 'Fruit', ' berries', ' dried fruit', ' nuts', 'fresh fruit', ' apple',
        ' pear', ' apricot', ' peach', ' nectarine', ' plum', ' grapes', ' cherry', ' sweet cherry. lemon', ' lime',
        ' orange', ' tangerine', ' grapefruit', ' banana', ' kiwi', ' olive', ' pineapple', ' papaya', ' mango',
        ' avocado', ' coconut', ' persimmon', ' pomegranate; melon', ' watermelon', ' berries', ' strawberry',
        ' blueberry', ' cranberry', ' raspberry', ' black currants', ' red currants', ' gooseberry', ' blackberry',
        ' whortleberry', ' dried fruit', ' dried apricots', ' raisins', ' figs', ' prunes', ' dates', ' candied fruit',
        ' nuts', ' hazelnuts', ' walnuts', ' almonds', ' chestnuts', ' peanuts', ' pistachio nuts', ' cashew nuts',
        ' pecans', ' macadamia nuts; apricot pits', ' pumpkin seeds', ' sunflower seeds', ' tomato', ' cucumber',
        ' onion', ' garlic', ' carrot', ' beets', ' potato', ' sweet pepper', ' paprika', ' hot pepper', ' chili pepper',
        ' ettuce', ' spinach', ' lollipop', ' bonbons', 'chocolates', ' chocolate candies', ' chocolate', ' chocolate bar',
        ' candy bar', ' taffy', ' toffee', ' fudge', ' marshmallow'
    ]

    var name = names[Math.round(Math.random() * (names.length-1))]
    return name
}


function storeDepartments() {
    var places = ['grocery', 'seafood/meat', 'alcohol', 'fruits/vegetables',
        'cheese/milk', 'sweets', 'bakery department', 'baked goods', 'fresh meat counter',
        'poultry section', 'dairy section', 'produce department', 'frozen food section',
        'canned goods', 'deli section', 'confectionery'
    ]
    var place = places[Math.round(Math.random() * (places.length-1))]
    return place
}

function costs() {
    var price = (Math.random() * 120).toFixed(2);
    return price;
}

function scale() {
    var weight = (Math.random() * 10).toFixed(2);
    return weight;
}

$('#submit').click(function() {

    var items = [];

    var total = 0;
    for (var i = 0; i < 15; i++) {
        items.push(new Item(itemNames(), costs(), scale(), storeDepartments()));
        $('.list-items').append("<li>" + items[i].name + "_____________" + items[i].getWeight() + 'kg' + "........$" + items[i].getBill() + "</li>");
        console.log(items);

        total += parseInt(items[i].getBill());

    }
    $('.list-items').append("<h1></h1>").append("<li>" + "You spend total : $" + total + "</li>");

})

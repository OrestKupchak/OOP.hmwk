
SuperUser.prototype.changeDataVisibility = function() {
  return this.isDataVisible = !this.isDataVisible;
}

var persons = [];
var rowNum = 0;
var allRows = $('tbody').children();


$('tbody').on('click', 'tr', function() {
  rowNum = this.rowNum - 1;
  visibility(); //show only this row
  for (var i = 1; i < this.cells.length; i++) {
    if($(this.cells[i]).is(':visible')) {
      $(this.cells[i]).hide();
    } else {
      $(this.cells[i]).show();
    }
  }
});


function visibility() {
  for (var i = 0; i < persons.length; i++) {
    if (i === rowNum) {
      continue;
    }
    persons[i].changeDataVisibility();
    if (persons[i].isDataVisible == false) {
      $('tbody tr:eq('+ i +')').hide();
    } else {
       $('tbody tr:eq('+ i +')').show();
    }
  }
}
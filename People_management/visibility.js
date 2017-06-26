
SuperUser.prototype.changeDataVisibility = function() {
  return this.isDataVisible = !this.isDataVisible;
}

var persons = [];
var rowNum = 0;
var allRows = $('tbody').children();


$('tbody').on('click', 'tr', function() {
  rowNum = this.rowNum - 1;
  var line = this.cells
  for (var i = 1; i < line.length; i++) {
    if($(line[i]).is(':visible')) {
      $(line[i]).hide();
    } else {
      $(line[i]).show();
    }
  }
});



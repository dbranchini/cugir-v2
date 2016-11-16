var searchMap = L.map('map').setView([43.2994, -74.2179], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(searchMap);

$('#panelFilters').hide();
$('#panelResults').hide();
$('#hideFilters').hide();

//hide filters
$('#hideFilters').on('click', function () {
  $('#panelFilters').hide();
  $('#showFilters').show();
  $('#hideFilters').hide();
});
$('#cancelFilters').on('click', function () {
  $('#panelFilters').hide();
  $('#showFilters').show();
  $('#hideFilters').hide();
});

//show filters
$('#showFilters').on('click', function () {
  $('#panelWelcome').hide();
  $('#panelResults').hide();
  $('#showFilters').hide();
  $('#hideFilters').show();
  $('#panelFilters').slideDown(400); 
});

//show filters
$('#showAllFilters').on('click', function () {
  $('#panelWelcome').hide();
  $('#panelResults').hide();
  $('#showFilters').hide();
  $('#hideFilters').show();
  $('#panelFilters').slideDown(400); 
});

//show search results 
$('#showResults').on('click', function() {
  $('#panelFilters').hide();
  $('#panelWelcome').hide();
  $('#showFilters').show();
  $('#hideFilters').hide();
  $('#panelResults').fadeIn(400);
  $('#results-panel').scrollTop(0);
});

//show search results
$('#search').on('click', function() {
  $('#panelFilters').hide();
  $('#panelWelcome').hide();
  $('#showFilters').show();
  $('#hideFilters').hide();
  $('#panelResults').fadeIn(400);
  $('#results-panel').scrollTop(0);
});

$('#startOver').on('click', function() {
  $('#panelResults').hide();
  $('#panelWelcome').fadeIn(400);
});




var cargarPagina = function () {
	cargarPokemon();
	 $(document).on("click", ".personaje", mostrarUrlParaDetalles);
}
var cargarPokemon = function () {
	var url = "http://pokeapi.co/api/v2/pokemon/";
	$.getJSON(url,function (response) {
		var pokemon = response.results;	
		mostarPokemon(pokemon);
	});	
};

var mostarPokemon = function (pokemon) {
	var $ul = $("#pokemons");
	pokemon.forEach(function(poke) {
		var $li = $("<li/>");
		$li.text(poke.name)
		$li.addClass("personaje");
		$li.attr("data-url", poke.url);
		$ul.append($li);

	}, this);		
};

var mostrarUrlParaDetalles = function () {
	var url = $(this).data("url");
	$.getJSON(url,function (response) {
		var especie =response.species;
	})
	}

$(document).ready(cargarPagina);
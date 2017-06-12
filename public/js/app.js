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

// var mostrarUrlParaDetalles = function () {
// 	var url = $(this).data("url");	
// 	var partes = url.split("/");
// 	var pokemon = partes[5];
// 	var especies = "-species";	
// 	var arreglo = [pokemon,especies];
//     partes[5] = arreglo.join("");
// 	var url2 = partes.join("/");		
	
// 	$.getJSON(url2,function (response) {
// 		console.log(response.color.name);
// 	});
// }

// $(document).ready(cargarPagina);
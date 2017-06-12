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
	var $section = $(".pokemons");
	pokemon.forEach(function(poke) {
	var $p = $("<a/>");
	var $art = $("<article/>");
	var $img = $("<img>");

	$p.attr("data-dir",poke.url);
	$("img").attr("src", "./assest/img/eve.png");
	$p.text("Nombre : "+poke.name);
	$art.addClass("col s4");
	$img.addClass("imagenes-pokemon center");
	$p.addClass("waves-effect waves-light personaje");
	$p.attr("href","#modal1")

	$art.append($img);
	$art.append($p);
	$section.append($art);
	}, this);		
};


var mostrarUrlParaDetalles = function () {
	var url = $(this).data("dir");
	url=url.replace("pokemon","pokemon-species");	
	// var partes = url.split("/");
	// var pokemon = partes[5];
	// var especies = "-species";	
	// var arreglo = [pokemon,especies];
    // partes[5] = arreglo.join("");
	// var url2 = partes.join("/");
	// console.log("url2");		
	
	$.getJSON(url,function (response) {
	var color = response.color.name;
	var habitad =response.habitat.name;
	var genera = response.genera.genus;
	var shape = response.shape.name;

    $("#color").text("Color : "+ color);
	$("#habitad").text("habitad : " + habitad);
	$("#genera").text("Genera : "+ genera);
	$("#shepe").text("Shape : "+ shape);
	console.log(response.color.name);
	});
}
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });


$(document).ready(cargarPagina);
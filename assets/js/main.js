function callAjax() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(dati) {
	  console.log(dati);
	//   per ogni object dentro l'array dati.response pusha il template clonato dentro il container #albums
	  dati.response.forEach(z => {
			var x = $("#template .msgsent").clone();
			var sorgente = $("#hb-template").html();
			var sorgDigerita = Handlebars.compile(sorgente);
			var objRef = {classname: 'cd', img: z.poster, title:z.title ,name:z.author ,genere:z.genre ,anno:z.year };
			var elValorizzato  = sorgDigerita(objRef);
			$("#albums").append(elValorizzato);
	  });
    },
    error: function() {}
  });
}
$(document).ready(function() {
  callAjax();
});

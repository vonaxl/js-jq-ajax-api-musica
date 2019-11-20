function callAjax() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(dati) {
	  console.log(dati);
	//   per ogni object dentro l'array dati.response pusha il template clonato dentro il container #albums
	
	  dati.response.forEach(z => {
			var sorgente = $("#hb-template").html();
			var sorgDigerita = Handlebars.compile(sorgente);
			var objRef = {classname: 'cd', img: z.poster, title:z.title ,name:z.author ,genere:z.genre ,anno:z.year };
			var elValorizzato  = sorgDigerita(objRef);
			$("#albums").append(elValorizzato);
	  });
    },
    error: function() {}
  });//fine ajax
} //fine funzione ajax
$(document).ready(function() {

	$(this).on('click', '.cd', function(){
		if ($(this).hasClass('zoom')) {
			$(this).removeClass('zoom');
		}else{
			$(this).siblings().removeClass('zoom');
			$(this).addClass('zoom');

			
			// trying some changes to css
			// $(this).find('.author').css({
			// 	'font-size': '2em',
			// 	'color': 'lightblue'
			// });
			// $(this).find('.year').css({
			// 	'font-size': '2em',
			// 	'color': 'lightblue'
			// });
			
		}

	});
	$('select').on('change', function () {
		var xGenere = $("option:selected", this);
		var genere=xGenere.val();
		if(genere=='Pop'){
			$('#albums').children().show();
			$('#albums').children().not('.Pop').hide();
		}else if(genere=='Rock'){
			$('#albums').children().show();
			$('#albums').children().not('.Rock').hide();
		}else if(genere=='Metal'){
			$('#albums').children().show();
			$('#albums').children().not('.Metal').hide();
		}else if(genere=='Jazz'){
			$('#albums').children().show();
			$('#albums').children().not('.Jazz').hide();
		} else {
			$('#albums').children().show(1000);
		}
		// console.log(genere);
		// $('#albums').children().hide();
		// $('#albums').find(genere).show();

	});
  callAjax();
}); //document

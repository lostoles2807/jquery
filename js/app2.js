
$('document').ready(function(){
	imagenes();
	jugar();
	
});

	var f = 7;
	var c = 7;
	var move = 0;
	var score = 0;
	var d1;
	
function imagenes(){
		for(i=1; i<=f; i++){
			for(j=1; j<=c; j++){
					$(".col-"+i+"").prepend('<div class="img'+i+'" id="imag'+j+'"><img src="image/'+Math.floor(Math.random()*4+1)+'.png"></div>')
				}				
		}
		$('img').css('height','100px')
	}
	
function drag_drop(){
		$('img').draggable({
			helper:"clone"
		});
		$('img').droppable({
			drop : function(event ,ui){
				d1 = ui.draggable;
				$(this).replaceWith(d1)
				move = move +1;
				$("#movimientos-text").html(move);
				iniciar_juego();
				//carga();
			},
		}); 
	}
	
function tiempo(){
		$('#timer').timer({
			countdown:true, //activa conteo regresivo
			duration:'30s',
			callback: function(){
				$("#timer").timer("remove");
				$('.panel-tablero').fadeOut("fast");
				$('.panel-score').animate({
					width: '+=800px'
				},4000);
				$('.moves').animate({
					width: '+=800px'
				},4000)
			}
		});
	}
	
function tiempo2(){
				$('.panel-score').animate({
					width: '-=800px'
				},1000);
				$('.moves').animate({
					width: '-=800px'
				},1000);
				$(".panel-tablero").delay(2000);
				$('.panel-tablero').fadeIn(3000);
	}
	
function jugar(){
	$(".btn-reinicio").click(function(){
		if($(this).html()=="Iniciar"){
			drag_drop();
			tiempo();
			$(this).html("Reiniciar");
		   }else{
		   	$(this).html("Iniciar");
			tiempo2();
			move = 0;
			$("#movimientos-text").html(move);
			score = 0;
			$('#score-text').html(score);
			$("img").remove();
			imagenes().reset();
		   }
	});
}


function iniciar_juego() {
		for(m=1; m<=7; m++){
			for(p=0; p<4; p++){
				while($(".img"+m+" img")[p] == $(".img"+m+" img")[p+1]  &&  $(".img"+m+" img")[p] == $(".img"+m+" img")[p+2]){
					$(".img"+m+" img")[p].remove();
					$(".img"+m+" img")[p+1].remove();
					$(".img"+m+" img")[p+2].remove();
					score = score + 500;
					$('#score-text').html(score);
					//carga();
				}
			}
		}
		/*for(m=1; m<=7; m++){
			if(($(".img"+m+" img")[0].src == $(".img"+m+" img")[1].src) && ($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src) && ($(".img"+m+" img")[5].src == $(".img"+m+" img")[6].src)){
					$(".img"+m+" img")[0].remove();
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					$(".img"+m+" img")[6].remove();
					score = score + 1000;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[0].src == $(".img"+m+" img")[1].src) && ($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src)){
					$(".img"+m+" img")[0].remove();
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					score = score + 800;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src) && ($(".img"+m+" img")[5].src == $(".img"+m+" img")[6].src)){
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					$(".img"+m+" img")[6].remove();
					score = score + 800;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[0].src == $(".img"+m+" img")[1].src) && ($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src)){
					$(".img"+m+" img")[0].remove();
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					score = score + 600;
					$('#score-text').html(score);
				
			}
			else if(($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src)){
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					score = score + 600;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src) && ($(".img"+m+" img")[5].src == $(".img"+m+" img")[6].src)){
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					$(".img"+m+" img")[6].remove();
					score = score + 600;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[0].src == $(".img"+m+" img")[1].src) && ($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src)){
					$(".img"+m+" img")[0].remove();
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					score = score + 400;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src)){
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					score = score + 400;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src)){
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					score = score + 400;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src) && ($(".img"+m+" img")[5].src == $(".img"+m+" img")[6].src)){
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					$(".img"+m+" img")[6].remove();
					score = score + 400;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[0].src == $(".img"+m+" img")[1].src) && ($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src)){
					$(".img"+m+" img")[0].remove();
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					score = score + 300;
					$('#score-text').html(score);
	
			}
			else if(($(".img"+m+" img")[1].src == $(".img"+m+" img")[2].src) && ($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src)){
					$(".img"+m+" img")[1].remove();
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					score = score + 300;
					$('#score-text').html(score);
	
			}
			else if(($(".img"+m+" img")[2].src == $(".img"+m+" img")[3].src) && ($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src)){
					$(".img"+m+" img")[2].remove();
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					score = score + 300;
					$('#score-text').html(score);
	
			}
			else if(($(".img"+m+" img")[3].src == $(".img"+m+" img")[4].src) && ($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src)){
					$(".img"+m+" img")[3].remove();
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					score = score + 300;
					$('#score-text').html(score);

			}
			else if(($(".img"+m+" img")[4].src == $(".img"+m+" img")[5].src) && ($(".img"+m+" img")[5].src == $(".img"+m+" img")[6].src)){
					$(".img"+m+" img")[4].remove();
					$(".img"+m+" img")[5].remove();
					$(".img"+m+" img")[6].remove();
					score = score + 300;
					$('#score-text').html(score);
			}
				cargar();
		}*/
	}
	
function carga(){
			for(k=1; k<=7; k++){
				while($('.col-'+k+'').length<7){
					$('.col-'+k+'').prepend('<div class="img'+i+'" id="imag'+j+'"><img src="image/'+Math.floor(Math.random()*4+1)+'.png"></div>');
					$('img').css('height','100px');
					drag_drop();
				}	
				
			}
	}

$('#empresa').hide();
$('#maisinfo').hide();

//ativa popover
$(function(){
    $('[data-toggle="popover"]').popover()
 });
/* <button class="btn btn-sm" data-toggle="popover"  data-placement="top"
title="Spotily" data-content="Imagem do aplicativo">Ajuda</button> */


$('#menusobre').click( function(){
	$('html, body').animate({
		scrollTop: $('#estilos').offset().top
	}, 500, 'linear');
});

$('#botao-topo').click( function(){
	$('html, body').animate({
		scrollTop: $('#top').offset().top
	}, 500, 'linear');
});

$('#carrossel').carousel({
  pause: false,
  interval: 5000
});

$(document).ready(function(){
    $(".efeito-imagem").mouseenter(function(){
        $(".efeito-imagem").animate({
            //left: '250px',
            opacity: '0.5',
            //height: '150px',
            //width: '150px',
        });
    });
});

$(document).ready(function(){
    $(".efeito-imagem").mouseout(function(){
        $(".efeito-imagem").animate({
            //left: '250px',
            opacity: '1',
            //height: '150px',
            //width: '150px',
        });
    });
});

/* cards
$('#opinioes').mouseenter(
	function(){
		//$('.card').show(500);
		$('.card').fadeIn(1000);
		//$('.card').fadeToggle(1000);
});
*/

$(document).ready(function() {
    
    /* Toda vez que a janela é rolada ...*/
    $(window).scroll( function(){
    
        /* Verifique a localização de cada elemento desejado */
        $('.card').each( function(i){
            
			/* parte inferior do objeto */
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            /* parte inferior da janela */
			var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Se o objeto estiver completamente visível na janela, apague-o */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
        }); 
    });  
});


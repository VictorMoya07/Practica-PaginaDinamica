$(document).ready(function(){
	
// Slider -Plugin Jquery

  if(window.location.href.indexOf("index") > -1){// se utiliza para indicarle que solo se
    //se utilice cuando este dentro del index.
	
  $(".galeria").bxSlider({
    	mode: 'fade',
    	captions: true,
    	slideWidth: 1200,
    	responsive:true,
      auto:true
  	});
}

 if(window.location.href.indexOf("index") > -1){
  //POSTS
  //Moment().format para formatear las fechas a nuestro gusto.
  var posts =[
  	{
  		titulo:"Prueba de titulo 1",
  		fecha:'Publicado el dia '+ moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
  		contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempore, accusantium repudiandae iure, possimus cumque, earum illo, impedit pariatur assumenda vel libero. Aliquam dolorum quidem minima, voluptatum voluptates tempore quaerat!lorem",

  	},
  	{
  		titulo:"Prueba de titulo 2",
  		fecha:'Publicado el dia '+ moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
  		contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempore, accusantium repudiandae iure, possimus cumque, earum illo, impedit pariatur assumenda vel libero. Aliquam dolorum quidem minima, voluptatum voluptates tempore quaerat!lorem",

  	},
  	{
  		titulo:"Prueba de titulo 3",
  		fecha:'Publicado el dia '+ moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
  		contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempore, accusantium repudiandae iure, possimus cumque, earum illo, impedit pariatur assumenda vel libero. Aliquam dolorum quidem minima, voluptatum voluptates tempore quaerat!lorem",

  	},
  	{
  		titulo:"Prueba de titulo 4",
  		fecha:'Publicado el dia '+ moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
  		contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempore, accusantium repudiandae iure, possimus cumque, earum illo, impedit pariatur assumenda vel libero. Aliquam dolorum quidem minima, voluptatum voluptates tempore quaerat!lorem",

  	},
  	{
  		titulo:"Prueba de titulo 5",
  		fecha:'Publicado el dia '+ moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
  		contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempore, accusantium repudiandae iure, possimus cumque, earum illo, impedit pariatur assumenda vel libero. Aliquam dolorum quidem minima, voluptatum voluptates tempore quaerat!lorem",

  	},
  
  	];
	
	posts.forEach((item, index)=> {/*utilizar comillas para incluir una plantilla en js*/
		var post=`
				<article class="post">
					<h2>${item.titulo}</h2>
					<p class="fecha">${item.fecha}</p>
					<p>
						${item.contenido}
					</p>
					<a href="#" class="button-more">Leer Mas</a>
				</article>
			`;

		$("#posts").append(post);
});
}	
//Selector de tema

var temas=$("#theme");

$("#togreen").click(function(){

  temas.attr("href" , "css/green.css");
});

$("#tored").click(function(){

  temas.attr("href" , "css/red.css");
});

$("#toblue").click(function(){

  temas.attr("href" , "css/blue.css");
});

//scroll arriba de la web
$(".subir").click(function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop:0
    }, 500)
});

//login falso

$("#login form").submit(function(){
  var input_name=$("#input_name").val();

  localStorage.setItem("input_name",input_name);
});

var infinput_name=localStorage.getItem("input_name");


if(infinput_name != null && infinput_name!="undefined"){
  
  var about_parrafo=$("#about");

    $("#about p").html("<br><strong>Bienvenido, "+infinput_name+"</strong></br>");
    about_parrafo.append("<a href='#' id='cerrarSesion'>Cerrar Sesion</a>");

    $("#login form").hide();

    $("#cerrarSesion").click(function(){
        localStorage.clear();
        location.reload();//function de bom para recargar la pag.
    });

	}
//Acordeon Plugin jquery ui
  if(window.location.href.indexOf("about") > -1){
    $("#acordeon").accordion();
  }

//Reloj Dinamico

  if(window.location.href.indexOf("reloj") > -1){
    
    setInterval(function(){//setInterval se utiliza para hacer un bucle cada cierto
      //tiempo.
          var reloj = moment().format("h:mm:ss");
          $("#reloj").html(reloj);

          },1000)
  }
    
   //Validacion 
if(window.location.href.indexOf("contacto") > -1){

  $("form input[name='date']").datepicker({
    dateFormat:"dd-mm-yy"
  });

   $.validate({
    lang: 'es',
    errorMessagePosition:"top",
    scrollToTopOnError:true
  }); 
  }
});


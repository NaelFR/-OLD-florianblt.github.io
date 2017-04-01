(function ($) {

	$('.round').wrap('<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var name = $input.data('name');
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = (($input.val() - min)/ (max - min));

		var $circle = $('<canvas Id="Circle" width="100px" height="100px"/>');
		var $color = $('<canvas Id="CanColor" width="100px" height="100px"/>');
		$div.append($circle);
		$div.append($color);
		
		//Cercle fond
		var ctx = $circle[0].getContext('2d');
		ctx.beginPath(); // Début du chemin de tracé
		ctx.arc(50,50,42.5,0,2*Math.PI); //(x centre, y centre, rayon, départ, arrivée);
		ctx.lineWidth= 10; // Largeur 
		ctx.strokeStyle= "#2c3e50";
		ctx.shadowOffsetX= 1;
		ctx.shadowBlur= 2.5;
		ctx.shadowColor= "rgba(177,179,184,0.1)";
		ctx.stroke(); // Fin du chemin de tracé

		// Cercle couleur
		var ctx = $color[0].getContext('2d');
		ctx.beginPath();
		ctx.arc(50,50,42.5,-1/2*(Math.PI), ratio*2*(Math.PI) - 1/2*(Math.PI)); 
		ctx.lineWidth= 10; 
		ctx.strokeStyle= "#b1b3b8";
		ctx.stroke(); 

		//Text
		var ctx = $color[0].getContext('2d'); 
    ctx.font = "13pt Arial, Helvetica, sans-serif;";
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.fillStyle = "rgb(177,178,184)";
    ctx.textAlign = "center"
    ctx.fillText(name, 50, 50);


	})

})(jQuery);



function Clic_Menu() {
    var x = document.getElementById("NavPage");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Lumière */

$(".boutonLumiere").click(function(){
  if($(".switch").css("left")=="0px"){
    $(".switch").animate({
      right:"0px",
      left:"62px"
    },150);
    $(".boutonLumiere").animate({
      backgroundColor:"#2ECC71"
    },150);
    $("head").append($(document.createElement("link")).attr({rel:"stylesheet", type:"text/css", href:"styleLight.css"}))
    document.getElementById('imgLink').innerHTML = '<img src="images/linkedinLight.png" alt="Linkedin" style="width: 35px;">';
    document.getElementById('imgGit').innerHTML = '<img src="images/githubLight.png" alt="Linkedin" style="width: 35px;margin-left:15%;margin-right:15%">';
    document.getElementById('imgMail').innerHTML = '<img src="images/mailLight.png" alt="Linkedin" style="width: 35px;">';

    // Test
    $('input.round').each(function(){
      var $input = $(this);
      var $div = $input.parent();
      var canvasCASuppr = document.getElementById('Circle');
      if( canvasCASuppr){
        canvasCASuppr.parentNode.removeChild( canvasCASuppr);
      }
      var canvasCoASuppr = document.getElementById('CanColor');
      if( canvasCoASuppr){
        canvasCoASuppr.parentNode.removeChild( canvasCoASuppr);
      }
    });
    $('input.round').each(function(){
      var $input = $(this);
      var $div = $input.parent();
      var name = $input.data('name');
      var min = $input.data('min');
      var max = $input.data('max');
      var ratio = (($input.val() - min)/ (max - min));

      var $circle = $('<canvas Id="Circle" width="100px" height="100px"/>');
      var $color = $('<canvas Id="CanColor" width="100px" height="100px"/>');
      $div.append($circle);
      $div.append($color);
      
      //Cercle fond
      var ctx = $circle[0].getContext('2d');
      ctx.beginPath(); // Début du chemin de tracé
      ctx.arc(50,50,42.5,0,2*Math.PI); //(x centre, y centre, rayon, départ, arrivée);
      ctx.lineWidth= 10; // Largeur 
      ctx.strokeStyle= "#b1b3b8";
      ctx.shadowOffsetX= 1;
      ctx.shadowBlur= 2.5;
      ctx.shadowColor= "rgba(177,179,184,0.1)";
      ctx.stroke(); // Fin du chemin de tracé

      // Cercle couleur
      var ctx = $color[0].getContext('2d');
      ctx.beginPath();
      ctx.arc(50,50,42.5,-1/2*(Math.PI), ratio*2*(Math.PI) - 1/2*(Math.PI)); 
      ctx.lineWidth= 10; 
      ctx.strokeStyle= "#2c3e50";
      ctx.stroke(); 

      //Text
      var ctx = $color[0].getContext('2d'); 
      ctx.font = "13pt Arial, Helvetica, sans-serif;";
      ctx.strokeStyle = "rgb(0,0,0)";
      ctx.fillStyle = "rgb(52,73,94)";
      ctx.textAlign = "center"
      ctx.fillText(name, 50, 50);
    });
  } else {
    $(".switch").animate({
      left:"0px",
      right:"60px"
    },150);
    $(".boutonLumiere").animate({
      backgroundColor:"#EF4836"
    },150)
    $("head").append($(document.createElement("link")).attr({rel:"stylesheet", type:"text/css", href:"styleDark.css"}));
    document.getElementById('imgLink').innerHTML = '<img src="images/linkedin.png" alt="Linkedin" style="width: 35px;">';
    document.getElementById('imgGit').innerHTML = '<img src="images/github.png" alt="Linkedin" style="width: 35px;margin-left:15%;margin-right:15%">';
    document.getElementById('imgMail').innerHTML = '<img src="images/mail.png" alt="Linkedin" style="width: 35px;">';
    $('input.round').each(function(){
      var canvasCASuppr = document.getElementById('Circle');
      if( canvasCASuppr){
        canvasCASuppr.parentNode.removeChild( canvasCASuppr);
      }
      var canvasCoASuppr = document.getElementById('CanColor');
      if( canvasCoASuppr){
        canvasCoASuppr.parentNode.removeChild( canvasCoASuppr);
      }
    });
    $('input.round').each(function(){
      var $input = $(this);
      var $div = $input.parent();
      var name = $input.data('name');
      var min = $input.data('min');
      var max = $input.data('max');
      var ratio = (($input.val() - min)/ (max - min));

      var $circle = $('<canvas Id="Circle" width="100px" height="100px"/>');
      var $color = $('<canvas Id="CanColor" width="100px" height="100px"/>');
      $div.append($circle);
      $div.append($color);
      
      //Cercle fond
      var ctx = $circle[0].getContext('2d');
      ctx.beginPath(); // Début du chemin de tracé
      ctx.arc(50,50,42.5,0,2*Math.PI); //(x centre, y centre, rayon, départ, arrivée);
      ctx.lineWidth= 10; // Largeur 
      ctx.strokeStyle= "#2c3e50";
      ctx.shadowOffsetX= 1;
      ctx.shadowBlur= 2.5;
      ctx.shadowColor= "rgba(177,179,184,0.1)";
      ctx.stroke(); // Fin du chemin de tracé

      // Cercle couleur
      var ctx = $color[0].getContext('2d');
      ctx.beginPath();
      ctx.arc(50,50,42.5,-1/2*(Math.PI), ratio*2*(Math.PI) - 1/2*(Math.PI)); 
      ctx.lineWidth= 10; 
      ctx.strokeStyle= "#b1b3b8";
      ctx.stroke(); 

      //Text
      var ctx = $color[0].getContext('2d'); 
      ctx.font = "13pt Arial, Helvetica, sans-serif;";
      ctx.strokeStyle = "rgb(0,0,0)";
      ctx.fillStyle = "rgb(177,178,184)";
      ctx.textAlign = "center"
      ctx.fillText(name, 50, 50);
    });
  }
});

(function(){
    var kKeys = [];
    function Kpress(e){
        kKeys.push(e.keyCode);
        if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
            jQuery(this).unbind('keydown', Kpress);
            kExec();
        }
    }
    jQuery(document).keydown(Kpress);
})(jQuery);
function kExec(){
   document.location.href="https://fr.wikipedia.org/wiki/Code_Konami"
}



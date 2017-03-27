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
    document.getElementById('imgGit').innerHTML = '<img src="images/GithubLight.png" alt="Linkedin" style="width: 35px;margin-left:15%;margin-right:15%">';
    document.getElementById('imgMail').innerHTML = '<img src="images/MailLight.png" alt="Linkedin" style="width: 35px;">';
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
    document.getElementById('imgGit').innerHTML = '<img src="images/Github.png" alt="Linkedin" style="width: 35px;margin-left:15%;margin-right:15%">';
    document.getElementById('imgMail').innerHTML = '<img src="images/Mail.png" alt="Linkedin" style="width: 35px;">';
  }
});



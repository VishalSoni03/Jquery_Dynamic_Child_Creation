// Create Child On Page Load, Asks for number of childs on page load via prompt.
$(document).ready(function(){

	var story =  prompt("Hpw Much Stories You Want To Read?");
	
	for(var i = 1 ; i<=story ; )
	{
		var row = document.createElement("div");
		row.id = "row"+i;
		// Adding Class names
		row.className =  "rowclass";
		row.className+= " row";
		
		// maindiv is existing div in homepage
		var maindiv = document.getElementById("maindiv");
		maindiv.appendChild(row);
		
		// Random number generation in range 1 to 4
		var loopvar = (story - i ) >=4?Math.floor((Math.random() * 4) + 1):story-i+1;
		// loopvar2 is to keep track for number of child created
		var loopvar2 = loopvar;
		
		for(var j=0;j<loopvar;j++)
		{
			
			var element = document.createElement("div"); 
			var storytitle = document.createElement("h2");
			element.className = "newdivclass";	
			element.className += " col-sm-3";
			
			// if 0 add no-display class 
			var check = Math.round(Math.random()); 
			if( check == 0 )
			{
				// have atlest one story on row to avoid empty rows
				if(loopvar2 > 1)
				{	
					loopvar2--;
					element.className += " no-display";
				}
			}
			
			// Title and small description of post
			
			var storytitletext = document.createTextNode("Story Title");
			storytitle.appendChild(storytitletext);
			var storycontent = document.createElement("h4");
			var storycontenttext = document.createTextNode("It is description about post read at your own risk");
			storycontent.className = "storytext";
			storycontent.appendChild(storycontenttext);
			element.appendChild(storytitle);
			element.appendChild(storycontent);
			
			
			
			var current = document.getElementById("row"+i);
			current.appendChild(element);
		}
		
		// add number of elements created.
		i+=loopvar2;
	}
	
	
	// Smooth scrolling for back to top
	 $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
        'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
        window.location.hash = target;
        });
    });
    
	$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {	
		$('.go-top').fadeIn(200);
		} 
		else {
			$('.go-top').fadeOut(200);
		}
	});
	
    // Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 900);
	});


// Fading Effect on Each Story Div, Taken from Stackoverflow Solutions

function fade() {
        $('.newdivclass').each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            /* If the object is completely visible in the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css('opacity')==0) {$(this).fadeTo(50,0.7);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css('opacity')==0.7) {$(this).fadeTo(50,0);}
            }
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function() {fade();}); //Fade in elements during scroll
});

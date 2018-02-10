try {
    window.addEventListener('load', function () {
	    // Some default starting height
	    let height = 100; 
	
	    /**
	     * Runs when the document is ready. Prints out some text. */
	    $(document).ready(function() {
            const first = "Hello, I'm ";
            const second = "Matthew Bennett";
            const  third = ".";
            const speed = 70;
	
	        // Dynamically grab the height of the page
	        height = $(window).height();
	
	        let nav = $("#Nav");
	            nav.bind('contentchanged', function() {
	            height = $(window).height();
	            setOffsetTop();
	        });
	
	        /**
	         * @function setOffsetTop
	         * Changing this value allows you to change where the nav
	         * bar will snap into place */
            function setOffsetTop() {
                // Reset the 'data-offset-top' to whatever the page height is
                nav.each(function(){
                    if ($(this).data('bs.affix')) {
                       $(this).data('bs.affix').options.offset.top = height;
                    }
                });
            }
            
            /**
             * First reset whatever the default 'data-offset-top' value is
             * to the window height. */
	        setOffsetTop();
	

            /**
             * Gotta watch out for user resizing their window. */
            $(window).on("resize", function() {
                height = $(window).height();
                setOffsetTop();
            });

            
            /**
            * @function styleText
            * 
            * @param {String} id : id of the html element
            * @param {String} txt : text string to print
            * @param {Function} callback : allows for syncro printing
            */
            function styleText(id, txt, callback) {
                let i = 0;
                type();

                /**
                 * @function type
                 * This function adds a character to the html element then waits 
                 * speed seconds. */
                function type() {
                    if (i < txt.length) {
                        document.getElementById(id).innerHTML += txt.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        callback();
                    }
                }
            }
            
            styleText("first", first, function () {
                styleText("second", second, function() {
                    styleText("third", third, function () {});
                });
            });

	
            /**
             * This function takes you to the about section when button pressed. */
            $("#work-btn").click(function() {
                $('html,body').animate({
                    scrollTop: $("#about").offset().top
                }, 'slow');
                $(this).blur();
            });

            
            /**
             * This function takes you to the top of the page when pressed. */
            $("#top-btn").click(function() {
                $('html,body').animate({
                    scrollTop: $("#home").offset().top
                }, 'slow');
                $(this).blur();
            }); 
		      
		
            /**
             * This function sets the home page css to active when scrolling. */
            $(window).on('scroll', function() {
                let y_scroll_pos = window.pageYOffset;
                let scroll_pos_test = height;  
                if (y_scroll_pos <= scroll_pos_test) {
                    $(act).addClass('active');
                }   
            });

            
            /**
            * This function closes the navbar on mobile after selecting a link. */
            $('.nav a').on('click', function(){
                $('.navbar-toggle').click() 
            });
        });
    });
} catch (ex) {
	window.alert("something went wrong");
}
  
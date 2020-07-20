

(function ($) {

    'use strict';

	// STICKY
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 50) {
	        $(".sticky").addClass("nav-sticky");
	    } else {
	        $(".sticky").removeClass("nav-sticky");
	    }
	});


	// SmoothLink
	$('.nav-item a, .mouse-down a').on('click', function(event) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $($anchor.attr('href')).offset().top - 0
	    }, 1500, 'easeInOutExpo');
	    event.preventDefault();
	});


	// scrollspy
	$("#mySidenav").scrollspy({
	    offset: 70
	});


	// loader
	$(window).on('load', function() {
	    $('#status').fadeOut();
	    $('#preloader').delay(350).fadeOut('slow');
	    $('body').delay(350).css({
	        'overflow': 'visible'
	    });
	});

	// contact

	$('#contact-form').submit(function() {

	    var action = $(this).attr('action');

	    $("#message").slideUp(750, function() {
	        $('#message').hide();

	        $('#submit')
	            .before('')
	            .attr('disabled', 'disabled');

	        $.post(action, {
	                name: $('#name').val(),
	                email: $('#email').val(),
	                comments: $('#comments').val(),
	            },
	            function(data) {
	                document.getElementById('message').innerHTML = data;
	                $('#message').slideDown('slow');
	                $('#cform img.contact-loader').fadeOut('slow', function() {
	                    $(this).remove()
	                });
	                $('#submit').removeAttr('disabled');
	                if (data.match('success') != null) $('#cform').slideUp('slow');
	            }
	        );

	    });

	    return false;

	});

	// feather icon
	feather.replace()

})(jQuery)
$("#signup").click(function() {
	$("#first").fadeOut("fast", function() {
	$("#second").fadeIn("fast");
	});
	});
	
	$("#signin").click(function() {
	$("#second").fadeOut("fast", function() {
	$("#first").fadeIn("fast");
	});
	});
	
	
	  
			 $(function() {
			   $("form[name='login']").validate({
				 rules: {
				   
				   email: {
					 required: true,
					 email: true
				   },
				   password: {
					 required: true,
					 
				   }
				 },
				  messages: {
				   email: "Please enter a valid email address",
				  
				   password: {
					 required: "Please enter password",
					
				   }
				   
				 },
				 submitHandler: function(form) {
				   form.submit();
				 }
			   });
			 });
			 
	
	
	$(function() {
	  
	  $("form[name='registration']").validate({
		rules: {
		  firstname: "required",
		  lastname: "required",
		  email: {
			required: true,
			email: true
		  },
		  password: {
			required: true,
			minlength: 5
		  }
		},
		
		messages: {
		  firstname: "Please enter your firstname",
		  lastname: "Please enter your lastname",
		  password: {
			required: "Please provide a password",
			minlength: "Your password must be at least 5 characters long"
		  },
		  email: "Please enter a valid email address"
		},
	  
		submitHandler: function(form) {
		  form.submit();
		}
	  });
	});
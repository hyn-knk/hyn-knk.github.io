$(document).ready(function() {

  // Push the body and the nav over by 285px over
  var main = function() {
    $('.fa-bars').click(function() {
      $('.nav-screen').animate({
        right: "0px"
      }, 200);

      $('body').animate({
        right: "285px"
      }, 200);
    });

    // Then push them back */

    $('.nav-links a').click(function() {
      $('.nav-screen').animate({
        right: "-285px"
      }, 500);

      $('body').animate({
        right: "0px"
      }, 500);
    });
  };


  // initiate full page scroll

  $('#fullpage').fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    menu: '#myMenu',
    fitToSection: false,

    afterLoad: function ( anchorLink, index){
      var loadedSection = $(this);


      //using index
      if(index==1){
        /* add opacity to arrow */
        $('.fa-chevron-down').each(function(){
          $(this).css('opacity','1')
        });
        $('.header-links a').each(function(){
          $(this).css('color','#3b2b2b')
        });
        $('.header-links').css("background-color","transparent");
      }

      else if(index!=1){
        $('.header-links a').each(function(){
          $(this).css('color','3b2b2b')
        });

      }

      //using index
      if(index == 2){

      }
    }
  });

  // move section down one
  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on('click', '#top', function(){
    $.fn.fullpage.moveTo(1);
  });

  $(document).on('click', '#about', function(){
    $.fn.fullpage.moveTo(2);
  });

  $(document).on('click', '#works', function(){
    $.fn.fullpage.moveTo(3);
  });

  $(document).on('click', '#skill', function(){
    $.fn.fullpage.moveTo(4);
  });

  $(document).on('click', '#goal', function(){
    $.fn.fullpage.moveTo(5);
  });

  // smooth scrolling
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 700);
          return false;
        }
      }
    });
  });

  $(function(){
    $('.single-item').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 900,
      dots: false,
      fade: true,
    });
  });


  //ajax form
  $(function() {

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

     
      });

    });

  });

});


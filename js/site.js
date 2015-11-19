jQuery(document).ready(function($) {

  $('.subtitle').addClass('animate');
	
//NAV LINKS
  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
        }
      }
    });
  });


$(".project").click(function(){
  $(".project-overlay").fadeIn(400);
  $(".main-nav, .main-nav-scrolled").fadeOut(400);
  $("body").addClass('no_scroll');
});


$(".close").click(function(){
  $("body").removeClass('no_scroll');
  $(".project-overlay").fadeOut(400);
  $(".main-nav, .main-nav-scrolled").fadeIn();
  
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
      $("body").removeClass('no_scroll');
      $(".project-overlay").fadeOut(400);
      $(".main-nav, .main-nav-scrolled").fadeIn();
    }
});

  // NAVIGATION SCROLL
  var  mn = $(".main-nav"),
  mns = "main-nav-scrolled",
  hdr = $('#landing').height();

  $(window).scroll(function() {
  
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } 
    else {
    mn.removeClass(mns);
    }
  });
});

// PROJECT GRID

  var project = $('.project:first').remove();

  for(var i = 0; i < projects.length; i++){
    var tempProject = project.clone();
    tempProject.attr('data-id', projects[i].id);
    tempProject.find('img').attr('src', projects[i].thumbUrl);
    $('#recent-work').append(tempProject);
  }



//PROJECT OVERLAY
  $('.project').click(function(){

    $('.detailed-view-wrap').find('img').attr('src', "")
    var myid = $(this).attr('data-id');

    for(var i = 0; i < projects.length; i++){
      if (projects[i].id == myid){
        $('.project-details-wrap').find('ul').html("");        

        $('.project-details-wrap').find('img').attr('src', projects[i].imgUrl);
        $('.project-details-wrap').find('h2').html(projects[i].title);  
        $('.summary').find('.description').html(projects[i].description);  
        $('.github').find('a').attr('href',projects[i].gitHub);  
        $('.url').find('a').attr('href',projects[i].url);  
        var technologiesString = "";

        //This goes through the list of technologies and makes a list of them on the window. 
        for (var k = 0; k < projects[i].technologies.length; k++) {
          //with javascript create a NEW li element with the contents of "projects[i].technologies[k]"
          //append that li element to ul          
          // $('.project-details-wrap').find('ul').append("<li>"+projects[i].technologies[k]+"</li>");
          technologiesString = technologiesString  +"  " + projects[i].technologies[k];
        }

        $('.project-details-wrap').find('.technologies-list').html(technologiesString);  

      }
    }
  });




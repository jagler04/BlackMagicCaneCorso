(function($){
  $(function(){

    M.AutoInit();

    // Plugin initialization
    $('.dropdown-trigger').dropdown({coverTrigger: false, constrainWidth: false});
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.button-collapse').sidenav({'edge': 'left'});
    $('select').not('.disabled').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space

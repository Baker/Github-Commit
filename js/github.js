(function($){
  $(function(){
    var window_width = $(window).width();
    // Github Latest Commit
    if ($('.github-commit').length) { // Checks if widget div exists (Index only)
      $.ajax({
        url: "https://api.github.com/repos/Baker/Last-Commit-Display-Github/commits/master",//Remember to change the url to proper repo 
          //TEMPLATE: https://api.github.com/repos/{USERNAME HERE}/{REPOS-NAME-HERE}/commits/master
        dataType: "json",
        success: function (data) {
          var sha = data.sha,
              date = jQuery.timeago(data.commit.author.date);
          if (window_width < 1120) {
            sha = sha.substring(0,7);
          }
          $('.github-commit').find('.date').html(date);
          $('.github-commit').find('.sha').html(sha).attr('href', data.html_url);
        }
      });
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space

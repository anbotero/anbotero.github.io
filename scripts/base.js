jQuery(document).ready(function() {
  // do stuff when the DOM is ready
  jQuery("nav > ul a").click(function(event) {
    alert("As you can see, the link no longer took you to the page you wanted.");
    event.preventDefault();
  });

  jQuery("nav li:last a").hover(function() {
    jQuery("nav li:last").addClass("green");
  }, function() {
    jQuery("nav li:last").removeAttr("class");
  });


  // Plus One Button
  jQuery.getScript("https://apis.google.com/js/plusone.js");

  function plusonevote( obj ) {
    _gaq.push(['_trackEvent','plusone',obj.state]);
  }


  // Tweet Button
  jQuery.getScript("http://platform.twitter.com/widgets.js");


  //  We want to track mouse overs on a video unit that has the element id "myVideoUnit".
  // assuming pageTracker is called from _gat._getTracker(account) 

  /*_gaq.push(function() {
    var mouseOverTracker = new MouseOverTracker(pageTracker);
    document.getElementById('myVideoUnit').onMouseOver = mouseOverTracker._trackMouseOver;
  });*/
});

// Truly asynchronous script loading
(function(w, d, s) {
  function go(){
    var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.src = url; js.id = id;
    fjs.parentNode.insertBefore(js, fjs);
  };
    load('//connect.facebook.net/en_US/all.js#appId=272697932759946&xfbml=1', 'fbjssdk');
    load('https://apis.google.com/js/plusone.js', 'gplus1js');
    load('//platform.twitter.com/widgets.js', 'tweetjs');
  }
  if (w.addEventListener) { w.addEventListener("load", go, false); }
  else if (w.attachEvent) { w.attachEvent("onload",go); }
}(window, document, 'script'));
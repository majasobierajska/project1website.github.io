//smooth scroll using jquery
$(document).ready(function(){
    // Add smooth scrolling to links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//google map js
function initMap() {
  var skytower = {lat: 51.094478, lng: 17.0174455};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: skytower,
  });

  var contentString = '<div id="content">'+
      '<div id="bodyContent">'+
      '<p>We are here</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: skytower,
    map: map,
    title: 'Skytower'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
};
//event listener for button
document.querySelector('.button').addEventListener('click', onClick);
function onClick(e)
{
   let val;
   val = e;
   e.target.innerText = 'Thank you';
  };

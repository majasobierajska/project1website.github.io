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
// Add Event Listener to parent Element 
document.querySelector('.navigation-bar').addEventListener("click", reply_click);
//CallBack Function
function reply_click(e) {
    e.preventDefault();
    call = setInterval(scroll, 30);
    target = e.srcElement.dataset.scroll;
    offset = document.getElementById(target).offsetTop

};

//google map js
function initMap() {
    // geo location of skytowe
    var skytower = {lat: 51.094478, lng: 17.0174455};
    // google map, zoomed to the streets
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: skytower});
    //  google map marker 
    var marker = new google.maps.Marker({position: skytower, map: map});
  };

//event listener for button
document.querySelector('.button').addEventListener('click', onClick);
function onClick()
{
    console.log('Button is clicked')
};

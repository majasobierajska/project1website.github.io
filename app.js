// scroll from navbar link to div using vanilla JS
let offset = 0;
let call;
function scroll() {
    if ((offset - document.documentElement.scrollTop) > 0) {
        document.documentElement.scrollTop += 20
    }
    else {
        clearInterval(call)
    }
};
// Add Event Listener to parent Element 
document.querySelector('.navigation-bar').addEventListener("click", reply_click);
//CallBack Function
function reply_click(e) {
    e.preventDefault();
    call = setInterval(scroll, 20);
    target = e.srcElement.dataset.scroll;
    offset = document.getElementById(target).offsetTop

};

//google map js
function initMap() {
    // The location of Uluru
    var skytower = {lat: 51.094478, lng: 17.0174455};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: skytower});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: skytower, map: map});
  };

//event listener for button
document.querySelector('.button').addEventListener('click', onClick);
function onClick()
{
    console.log('Button is clicked')
};

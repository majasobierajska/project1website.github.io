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

}

//google map js
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    }

//event listener for button
document.querySelector('.button').addEventListener('click', onClick);
function onClick()
{
    console.log('Button is clicked')
};

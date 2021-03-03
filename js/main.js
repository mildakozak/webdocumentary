var i = 0;
var left = document.getElementById('product-img-left');
var center = document.getElementById('product-img-center');
var right = document.getElementById('product-img-right');
var arrowRight = document.getElementById('right-arrow-icon');
var arrowLeft = document.getElementById('left-arrow-icon');
var images = [];


images[0] = "images/icons/bottle.svg";
images[1] = "images/icons/bag.svg";
images[2] = "images/icons/soap.svg";
images[3] = "images/icons/sustainability.svg";
images[4] = "images/icons/family.svg";
images[5] = "images/icons/transparency.svg";



function slideRight(){

  for (var i = 0; i <= (images.length - 3); i++) {
    left.src = images[i];
    center.src = images[i + 1];
    right.src = images[i + 2];
  }
  arrowRight.src = "images/icons/arrow-grey-reverse.svg";
  arrowLeft.src = "images/icons/arrow.svg";

}
function slideLeft(){

  for (var i = 0; i >= 0; i--) {
    left.src = images[i];
    center.src = images[i + 1];
    right.src = images[i + 2];
  }
  arrowRight.src = "images/icons/arrow-reverse.svg";
  arrowLeft.src = "images/icons/arrow-grey.svg";

}

function playPause() {
    var mediaPlayer = document.getElementById('video');
    var icon = document.getElementById('video-icon');

    if (mediaPlayer.paused) {
        mediaPlayer.play();
        icon.src = "images/icons/pause.svg";
    } else {
        mediaPlayer.pause();
        icon.src = "images/icons/play.svg";
    }
}

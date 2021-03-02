var i = 0;
var product = document.getElementById('product-img');
var images = [];

images[0] = "images/icons/bottle.svg";
images[1] = "images/icons/bag.svg";
images[2] = "images/icons/soap.svg";
images[3] = "images/icons/sustainability.svg";
images[4] = "images/icons/family.svg";
images[5] = "images/icons/transparency.svg";

function changeImage(){

  document.product.src = "bag.svg";

  if (i < images.lenght - 1) {
    i++;
  }
  else {
    i = 0;
  }
}

const app = function() {



// const ul = document.createElement('ul');
// ul.classList.add('cat');
//
// const name = document.createElement('li');
// name.innerText = "Chris";
//
// const favouriteFood = document.createElement('li');
// favouriteFood.innerText = "Lasagne";
//
// const imageLi = document.createElement('li');
//
// const image = document.createElement('img')
// image.src = "https://vignette.wikia.nocookie.net/cats/images/b/b6/Sphynx.jpg/revision/latest?cb=20091024071846&path-prefix=en";
//
// imageLi.appendChild(image);
// ul.appendChild(name);
// ul.appendChild(favouriteFood);
// ul.appendChild(imageLi);
// const cats = document.querySelector('#cats');
// cats.appendChild(ul);


const image = "https://vignette.wikia.nocookie.net/cats/images/b/b6/Sphynx.jpg/revision/latest?cb=20091024071846&path-prefix=en"
createCat(image, 'Chris', 'lasagne')

}

const createUl = function() {
  const ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
}

const createName =function(text) {
  const name = document.createElement('li');
  name.innerText = text;
  return name;
}

const createFavouriteFood = function(text) {
  const favouriteFood = document.createElement('li');
  favouriteFood.innerText = text;
  return favouriteFood;
}

const createImageLi = function() {
  const imageLi = document.createElement('li');
  return imageLi;
}

const createImage = function(url) {
  const image = document.createElement('img')
  image.src = url;
  return image;
}

const addElements = function(ul, image, name, favouriteFood, imageLi) {
  imageLi.appendChild(image);
  ul.appendChild(name);
  ul.appendChild(favouriteFood);
  ul.appendChild(imageLi);
  const cats = document.querySelector('#cats');
  cats.appendChild(ul);
}

const createCat = function(image, name, favouriteFood) {
  const ul = createUl();
  const nameLi = createName(name);
  const favouriteFoodLi = createFavouriteFood(favouriteFood);
  const imageLi = createImageLi();
  const createImg = createImage(image);
  addElements(ul, createImg, nameLi, favouriteFoodLi, imageLi)
}

document.addEventListener('DOMContentLoaded', app);

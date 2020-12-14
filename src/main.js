// Variables targeting DOM elements 👇
var image = document.querySelector('img');

var title = document.querySelector('h2');

var tagline1 = document.querySelector('.tagline-1');

var tagline2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');

var makeCoverButton = document.querySelector('.make-new-button');

var homeButton = document.querySelector('.home-button');

var homeView = document.querySelector('.home-view');

var savedCoversView = document.querySelector('.saved-view');

var viewSavedButton = document.querySelector('.view-saved-button');

var saveCoverButton = document.querySelector('.save-cover-button');

var makeNewBookButton = document.querySelector('.create-new-book-button');

var savedCoversSection = document.querySelector('.saved-covers-section');

var formView = document.querySelector('.form-view');

var userCover = document.querySelector('.user-cover').value;

var userTitle = document.querySelector('.user-title').value;

var userDesc1 = document.querySelector('.user-desc1').value;

var userDesc2 = document.querySelector('.user-desc2').value;

var savedCovers = [
  //new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(image, title, tagline1, tagline2)



// Event listeners 👇
homeButton.addEventListener('click', viewHome);

randomCoverButton.addEventListener('click', createCover);

saveCoverButton.addEventListener('click', saveCover);

makeCoverButton.addEventListener('click', viewForm);

makeNewBookButton.addEventListener('click', function(){
  event.preventDefault()
  makeBook()
});

viewSavedButton.addEventListener('click', viewSavedCovers);

savedCoversSection.addEventListener('dblclick', function() {
  deleteCover()
});

// Event handlers functions 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function deleteCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    var coverCheck = savedCovers[i].id;

    if (parseInt(event.target.closest('.mini-cover').id) === coverCheck) {
      savedCovers.splice(i, 1);
    };
  };
  showMiniBooks();
};


function saveCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id ||
        currentCover.cover === savedCovers[i].cover &&
        currentCover.title === savedCover[i].title &&
        currentCover.tagline1 === savedCover[i].tagline1 &&
        currentCover.tagline2 === savedCover[i].tagline2) {
    console.log('Already Saved!');
    return;
    };

  };
      savedCovers.unshift(currentCover);
      covers.unshift(currentCover.cover);
      titles.unshift(currentCover.title);
      descriptors.unshift(currentCover.tagline1);
      descriptors.unshift(currentCover.tagline2);
};

function viewForm() {
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedCoversView.classList.add('hidden');
  savedCoversSection.classList.add('hidden');
};

function makeBook() {
  userCover = document.querySelector('.user-cover').value;
  userTitle = document.querySelector('.user-title').value;
  userDesc1 = document.querySelector('.user-desc1').value;
  userDesc2 = document.querySelector('.user-desc2').value;
  currentCover = new Cover(userCover, userTitle, userDesc1, userDesc2);
  image.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  userCover = '';
  userTitle = '';
  userDesc1 = '';
  userDesc2 = '';
};


function createCover() {
  var descriptor1 = descriptors[getRandomIndex(descriptors)];
  var descriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  currentCover = new Cover(randomImage, randomTitle, descriptor1, descriptor2);
  image.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  formView.classList.add('hidden');
};

function showMiniBooks() {
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <section class="mini-cover" id=${savedCovers[i].id}>
          <img class="cover-image" src="${savedCovers[i].cover}">
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
      </section>
  `
  };
};

function viewSavedCovers() {
  savedCoversSection.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedCoversView.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formView.classList.add('hidden');
  showMiniBooks();
};

function viewHome() {
  homeView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  savedCoversSection.classList.add('hidden');
  savedCoversView.classList.add('hidden');
  formView.classList.add('hidden');
};


createCover();

// Get the necessary elements
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupContainer = document.getElementById('popupContainer');

// Add event listener to the open button
openPopupBtn.addEventListener('click', function() {
  popupContainer.style.display = 'block';
});

// Add event listener to the close button
closePopupBtn.addEventListener('click', function() {
  popupContainer.style.display = 'none';
});

// navebar scroll

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});







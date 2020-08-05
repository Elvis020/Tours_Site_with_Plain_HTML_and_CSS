// Function expression to select elements
const selectElement = (s) => document.querySelector(s)

// Open the menu on click
selectElement('.open').addEventListener('click', (e) => {
  e.preventDefault();
  // Adding the active class to nav-list
  selectElement('.nav-list').classList.add('active');
})

// Close the menu on click
selectElement('.close').addEventListener('click', (e) => {
  e.preventDefault();
  // Removing the active class from nav-list
  selectElement('.nav-list').classList.remove('active');
})
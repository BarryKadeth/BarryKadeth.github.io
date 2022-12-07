/***************** Function: Hamburger Menu Button ****************/ 
const hamburgerButton = document.getElementById('hamburger')
const menuList = document.getElementById('mainMenu')

function toggleButton() {
    menuList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


/************** Function: Sticky Navbar **************/

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById('navbar');

// Add the sticky class to the navbar
function myFunction() {
    navbar.classList.add('sticky')
}

/************** Function: Confirm contact **************/
function alertContact () {
    var email = document.getElementById("email").value;
    if (! email.includes("@")) {
        alert ("please enter an email")
    } else {
        alert ("Hello! I look forward to meeting with you soon");
    }
}

/************** Function: Confirm Post **************/
function alertPost () {
    alert ("You have posted! Logging out and going to the main page");
}

/************** Function: Confirm experience **************/
function alertExperience () {
    alert ("You have logged an experience! Logging out and going to the main page");
}

/************** Enter button: acts like tab button **************/
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
      var form = event.target.form;
      var index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  });


// script.about.js
let currentIndex = 0;

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
    modal.style.display = "block";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
    modal.style.display = "none";
    }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    });
};

function openUrl(url) {
    window.open(url, "_blank");
}

// Event listeners for modal open and close buttons
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('[data-open-modal]');
    const closeButtons = document.querySelectorAll('[data-close-modal]');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-open-modal');
            openModal(modalId);
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close-modal');
            closeModal(modalId);
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});


// Functie om leeftijd te berekenen
function berekenLeeftijd(geboortedatum) {
    const vandaag = new Date();
    const geboortejaar = geboortedatum.getFullYear();
    const geboortemaand = geboortedatum.getMonth();
    const geboortedag = geboortedatum.getDate();

    let leeftijd = vandaag.getFullYear() - geboortejaar;
    const isVerjaardagVoorbij = (vandaag.getMonth() > geboortemaand) || 
                                (vandaag.getMonth() === geboortemaand && vandaag.getDate() >= geboortedag);

    if (!isVerjaardagVoorbij) {
        leeftijd--;
    }

    return leeftijd;
}

document.addEventListener('DOMContentLoaded', function() {
    var coll = document.querySelectorAll('.collapsible');

    coll.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var mobileMenu = document.getElementById("mobile-menu");
    var navbar = document.getElementById("navbar");
  
    mobileMenu.addEventListener("click", () => {
        navbar.classList.toggle("active"); // Toggle the 'active' class
    });
});

document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
});
  

var slideIndex = 1;
showDivs(slideIndex);
  
function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var slides = document.getElementsByClassName("slideBox");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length} ;

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

}
slides[slideIndex-1].style.display = "block";
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // voorkomt onmiddellijk navigeren
  
      // Voegt fade-out class toe aan de body
      document.body.classList.add('fade-out');
  
      // Wacht tot de animatie eindigt voordat je naar de nieuwe pagina gaat
      setTimeout(() => {
        window.location.href = this.href;
      }, 500); // tijd moet overeenkomen met de duur van de fade-out animatie
    });
  });


function moveCarousel(direction) {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    // Update the current index
    currentIndex += direction;

    // Loop back to the start or end if out of bounds
    if (currentIndex < 0) {
    currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
    currentIndex = 0;
    }

    // Move the carousel
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

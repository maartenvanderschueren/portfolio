// script.about.js

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("dot-loader");
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 200); // Wacht tot de fade-out is voltooid
  }, 500); // Laadscherm blijft 2 seconden zichtbaar
});

let currentIndex = 1;

const projects = [
    {
      src: "../img/Afbeelding1.png",
      title: "Projec1: Eindwerk Elektromechanica"
    },
    {
      src: "../img/solar.png",
      title: "Project 2: Voorspelling Zonnepanelen"
    },
    {
        src: "../img/arduino.png",
        title: "Project 3: Arduino project"
      },
    // Voeg hier meer projecten toe indien nodig
  ];
  
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

document.addEventListener("DOMContentLoaded", () => {
  const marqueeContent = document.querySelector(".gallery-track");
  const clone = marqueeContent.cloneNode(true);
  marqueeContent.parentElement.appendChild(clone);
});

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

function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

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

document.addEventListener("DOMContentLoaded", function () {
  const flags = document.querySelectorAll(".language-switcher .flag");

  const loadLanguage = (lang) => {
    fetch(`../lang/${lang}.json`)
      .then((response) => response.json())
      .then((translations) => {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
          const key = element.getAttribute("data-i18n");
          if (translations[key]) {
            let text = translations[key];
            if (text.includes("{{age}}")) {
              text = text.replace("{{age}}", age);
            }
            if (element.tagName === "TITLE") {
              document.title = text;
            } else {
              element.innerHTML = text;
            }
          }
        });
      })
      .catch((error) => console.error("Error loading language file:", error));
  };

  const savedLanguage = localStorage.getItem("selectedLanguage") || "nl";
  loadLanguage(savedLanguage);

  flags.forEach((flag) => {
    flag.addEventListener("click", () => {
      const selectedLanguage = flag.getAttribute("data-lang");
      localStorage.setItem("selectedLanguage", selectedLanguage); // Sla de taal op
      loadLanguage(selectedLanguage);
    });
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



function renderCarousel() {
    const carousel = document.querySelector('.carousel-card');
    const items = document.querySelectorAll('.carousel-item-card');
    const totalItems = items.length;
  
    // Bereken de indexen voor previous, active en next
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;
  
    // Reset alle items
    items.forEach((item, index) => {
      item.classList.remove('previous', 'active', 'next', 'hidden');
      item.cloneNode(true); // Clone the node to reset it
      if (index === prevIndex) {
        item.classList.add('previous');
      } else if (index === currentIndex) {
        item.classList.add('active');
      } else if (index === nextIndex) {
        item.classList.add('next');
      } else {
        item.classList.add('hidden'); // Verberg items die niet in de carousel zichtbaar zijn
      }
    });
  }

function nextProject() {
    const items = document.querySelectorAll('.carousel-item-card');
    console.log(currentIndex);
    if (currentIndex == 0) {
        currentIndex = items.length -1;
    } else {
        currentIndex = (currentIndex - 1) % items.length;
    }
    renderCarousel();
}

function prevProject() {
    const items = document.querySelectorAll('.carousel-item-card');
    console.log(currentIndex);
    if (currentIndex == items.length) {
        currentIndex = 0;
    } else {
        currentIndex = (currentIndex + 1) % items.length;
    }
    renderCarousel();
}


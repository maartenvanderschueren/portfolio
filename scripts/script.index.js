const geboortedatum = new Date(2004, 7, 17); // Maand is 0-indexed, dus 7 = augustus

// Functie om leeftijd te berekenen
function berekenLeeftijd(geboortedatum) {
  const vandaag = new Date();
  let leeftijd = vandaag.getFullYear() - geboortedatum.getFullYear();
  const isVerjaardagVoorbij =
    vandaag.getMonth() > geboortedatum.getMonth() ||
    (vandaag.getMonth() === geboortedatum.getMonth() &&
      vandaag.getDate() >= geboortedatum.getDate());
  if (!isVerjaardagVoorbij) leeftijd--;
  return leeftijd;
}

const age = berekenLeeftijd(geboortedatum);

document.addEventListener("DOMContentLoaded", function () {
  const flags = document.querySelectorAll(".language-switcher .flag");

  const loadLanguage = (lang) => {
    fetch(`./lang/${lang}.json`)
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

document.addEventListener("DOMContentLoaded", function() {
    var mobileMenu = document.getElementById("mobile-menu");
    var navbar = document.getElementById("navbar");
  
    mobileMenu.addEventListener("click", () => {
      navbar.classList.toggle("navbar-active");
    });
  });

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

  document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("NaamHeader");
    const texts = ["Maarten Van der Schueren", "Student AI & Data Engineer", "3de graad Elektromechanica"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentText = texts[textIndex];
      const displayedText = isDeleting
        ? currentText.substring(0, charIndex--)
        : currentText.substring(0, charIndex++);
  
      header.textContent = displayedText;
  
      // Zorg ervoor dat de breedte van de cursor de tekst volgt
      console.log(header.textContent.length);
      header.style.width = `${header.textContent.length}rem`;
  
      if (!isDeleting && charIndex === currentText.length) {
        // Pauze na volledig typen
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // Ga naar de volgende tekst
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Herhaal de teksten
      }
  
      const typingSpeed = isDeleting ? 50 : 100; // Sneller verwijderen
      setTimeout(type, typingSpeed);
    }
  
    type();
  });

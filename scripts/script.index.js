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

document.getElementById('leeftijd').textContent = berekenLeeftijd(geboortedatum);

document.addEventListener("DOMContentLoaded", function() {
    var mobileMenu = document.getElementById("mobile-menu");
    var navbar = document.getElementById("navbar");
  
    mobileMenu.addEventListener("click", () => {
      navbar.classList.toggle("navbar-active");
    });
  });
  

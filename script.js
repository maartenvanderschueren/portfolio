
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

const geboortedatum = new Date(2004, 7, 17); // Maand is 0-indexed, dus 7 = augustus

document.addEventListener('DOMContentLoaded', function() {
    var coll = document.querySelectorAll('.collapsible');

    coll.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                // Als max-height is ingesteld, reset het
                content.style.maxHeight = null;
            } else {
                // Anders, stel de max-height in op de scroll hoogte
                content.style.maxHeight = content.scrollHeight + "px"; // Maakt de hoogte dynamisch
            }
        });
    });
});


document.getElementById('leeftijd').textContent = berekenLeeftijd(geboortedatum);

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navbar = document.getElementById("navbar");
  
    mobileMenu.addEventListener("click", () => {
      navbar.classList.toggle("navbar-active"); // Voeg de class toe of verwijder deze
    });
  });
  

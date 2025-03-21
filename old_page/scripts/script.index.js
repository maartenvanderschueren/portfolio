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
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
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
  
var myVar;

function myFunction() {
myVar = setTimeout(showPage, 3000);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}

window.onload = function() {
    // Jouw code die je wil uitvoeren bij het laden van de pagina
    console.log("Pagina is volledig geladen!");
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
    
   
};


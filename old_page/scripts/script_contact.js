document.addEventListener("DOMContentLoaded", function() {
    var mobileMenu = document.getElementById("mobile-menu");
    var navbar = document.getElementById("navbar");
  
    mobileMenu.addEventListener("click", () => {
      navbar.classList.toggle("navbar-active");
    });
});
  

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


window.onload = function() {
// Jouw code die je wil uitvoeren bij het laden van de pagina
    console.log("Pagina is volledig geladen!");
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
   
};
  

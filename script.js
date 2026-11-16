
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// OPEN AND CLOSE MOBILE MENU

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

    // CLOSE MENU AFTER CLICKING A LINK

    const links = navLinks.querySelectorAll("a");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("show");
            menuBtn.textContent = "☰";

        });

    });

}

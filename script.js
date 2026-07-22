document.addEventListener("DOMContentLoaded", () => {

    // Mobile Menu

    const menuButton = document.querySelector(".menu-toggle");

    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    // Smooth Scroll

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

            navLinks.classList.remove("active");

        });

    });

});

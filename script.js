// A Cut Above Argyll V2

document.addEventListener("DOMContentLoaded", () => {

    console.log("A Cut Above Argyll Website Loaded");

    // Smooth scrolling

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))

                .scrollIntoView({

                    behavior:"smooth"

                });

        });

    });

});

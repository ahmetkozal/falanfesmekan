document.addEventListener("DOMContentLoaded", () => {

    const topButton = document.getElementById("top-button");

    if (!topButton) return;


    window.addEventListener("scroll", () => {

        if (window.scrollY > 200) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }

    });


    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

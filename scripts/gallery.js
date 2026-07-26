async function createGallery(elementId, folder, altText) {

    const gallery = document.getElementById(elementId);

    if (!gallery) return;


    let i = 1;


    while (true) {

        const number = String(i).padStart(3, "0");
        const src = `${folder}/${number}.webp`;


        const exists = await imageExists(src);


        if (!exists) break;


        const img = document.createElement("img");

        img.src = src;
        img.alt = altText;


        gallery.appendChild(img);

        i++;
    }
}



function imageExists(src) {

    return new Promise(resolve => {

        const img = new Image();

        img.onload = () => resolve(true);

        img.onerror = () => resolve(false);

        img.src = src;

    });

}




// ALMALUU

createGallery(
    "gallery-manzaralar",
    "../media/trips/almaluu07-2026/manzaralar",
    "Almaluu manzarası"
);


createGallery(
    "gallery-hayvanlar",
    "../media/trips/almaluu07-2026/hayvanlar",
    "Almaluu hayvanları"
);


createGallery(
    "gallery-cicek-bocek",
    "../media/trips/almaluu07-2026/cicek-bocek",
    "Çiçek ve böcek"
);


createGallery(
    "gallery-mian",
    "../media/trips/almaluu07-2026/mian",
    "Mian"
);





// LIGHTBOX

document.addEventListener("DOMContentLoaded", () => {


    const lightbox = document.createElement("div");

    lightbox.id = "lightbox";


    const img = document.createElement("img");


    lightbox.appendChild(img);

    document.body.appendChild(lightbox);



    document.addEventListener("click", e => {


        const target = e.target.closest(".gallery img");


        if (!target) return;


        img.src = target.src;

        img.alt = target.alt;


        lightbox.classList.add("active");

    });



    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });



    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });


});

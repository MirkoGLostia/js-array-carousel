// variabili

let firstImage, imagePosition;

const image = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"]

const btnPrevious = document.getElementById("previous-image");

const btnNext = document.getElementById("next-image");



// creazione container immagini

for (let i = 0; i < image.length; i++) {
    
    const cicleImage = image[i];

    const div = document.createElement('div');

    div.innerHTML = `<img src="img/${cicleImage}" alt="immagine">`; 

    document.getElementById("container").append(div);
    
}



// selezione elementi creati

imagePosition = 0;

const containerImage = document.querySelectorAll("#container div");

containerImage[imagePosition].classList.add("active");


// funzionalità pulsanti

// next
btnNext.addEventListener("click",
    function () {

        containerImage[imagePosition].classList.remove("active");
        
        imagePosition++;

        containerImage[imagePosition].classList.add("active");

    }
)


//previous
btnPrevious.addEventListener("click",
    function () {

        containerImage[imagePosition].classList.remove("active");
        
        imagePosition--;

        containerImage[imagePosition].classList.add("active");

    }
)



// variabili

let firstImage;

const image = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"]



// creazione container immagini

for (let i = 0; i < image.length; i++) {
    
    const cicleImage = image[i];

    const div = document.createElement('div');

    div.innerHTML = `<img src="img/${cicleImage}" alt="immagine">`; 

    document.getElementById("container").append(div);
    
}

firstImage = document.querySelector("#container div");

firstImage.classList.add("active");

console.log(firstImage);

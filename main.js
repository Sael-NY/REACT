// Cibler le bouton

// const button = document.querySelector("button");

// // Au click sut le bouton

// button.addEventListener("click", () => {
//     console.log("cliqué");


// // Cibler le texte

// const text = document.querySelector("p")

// // Masquer le texte

// text.style.display = "none";

// });

// ---------------------------------------------------------------------

// const button = document.querySelector("button");

// // au click sur le bouton

// button.addEventListener("click", () => {

//     // Je cible l'élément dans le DOM qui a l'id root
//     const divRoot = document.querySelector("#root");

//     // Je crée une balise article
//     const articleElement = document.createElement("article");

//     // J'insère la balise article dans l'élément root
//     divRoot.appendChild(articleElement);

//     // Créer un titre
//     const titleElement = document.createElement("h1");

//     titleElement.textContent = "Hello la piscine"

//     articleElement.appendChild(titleElement)


//     // Créer une image
//     const imgElement = document.createElement("img");
//     imgElement.setAttribute("src", "")
//     articleElement.appendChild(imgElement);


//     // Créer le texte
//     const texteElement = document.createElement("p");
//     texteElement = "lorem ipsum";
//     articleElement.appendChild(texteElement);


// })

// -------------------------------------------------------

const button2 = document.querySelector("#btn2")

button2.addEventListener("click", () => {

    // Balise
    const divRoot2 = document.querySelector("#root2");


    // Article

    const articleElement2 = document.createElement("article2");
    divRoot2.appendChild(articleElement2);

    // Titre
    const titleElement2 = document.createElement("h1");

    titleElement2.textContent = "Bonjour c'est Sael";

    articleElement2.appendChild(titleElement2);

    // Image

    const imgElement2 = document.createElement("img");
    imgElement2.setAttribute("src", "");
    articleElement2.appendChild(imgElement2);


    // Texte

    const texteElement2 = document.createElement("p");
    texteElement2 = "C'est moi Sael";
    articleElement2.appendChild(texteElement2)






})



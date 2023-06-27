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

// const button2 = document.querySelector("#btn2")

// button2.addEventListener("click", () => {

//     // Balise
//     const divRoot2 = document.querySelector("#root2");


//     // Article

//     const articleElement2 = document.createElement("article2");
//     divRoot2.appendChild(articleElement2);

//     // Titre
//     const titleElement2 = document.createElement("h1");

//     titleElement2.textContent = "Bonjour c'est Sael";

//     articleElement2.appendChild(titleElement2);

//     // Image

//     const imgElement2 = document.createElement("img");
//     imgElement2.setAttribute("src", "");
//     articleElement2.appendChild(imgElement2);


//     // Texte

//     const texteElement2 = document.createElement("p");
//     texteElement2 = "C'est moi Sael";
//     articleElement2.appendChild(texteElement2)


// })


// ---------------------------------------------------------------------

const button2 = document.querySelector("#btn2")

button2.addEventListener("click", () => {

    // Balise
    const divRoot2 = document.querySelector("#root2");


    // Article

    const articleElement2 = createNodeElement("article2", { class: "article-manoir" });
    divRoot2.appendChild(articleElement2);

    // Titre
    const titleElement2 = createNodeElement("h1", "title-manoir", "Enchanté, moi c'est Salim, mais appelle moi Sael");

    articleElement2.appendChild(titleElement2);

    // Image

    const imgElement2 = createNodeElement(
        "img",
        "img-manoir",
        "",
        "https://www.manoirdecontres.com/wp-content/uploads/2019/11/Le-Manoir-de-Contres-front-1024x684.jpg"
    );
    articleElement2.appendChild(imgElement2);

    // Texte

    const textElement2 = createNodeElement("p", "text-manoir", "lorem");
    articleElement2.appendChild(textElement2);

})

const createNodeElement = (tagType, attributes, text = "") => {
    const nodeElement = document.createElement(tagType);

    // on fait une boucle sur l'objet attributes
    // et pour chaque propriété trouvée (class, src etc)
    // on ajoute un attribut avec en type le nom de la propriété et en valeur sa valeur
    for (const property in attributes) {
        nodeElement.setAttribute(property, attributes[property]);

    }

    nodeElement.textContent = text;

    return nodeElement;
};

// const createNodeElement = (tagType, className, text = "", imgSrc = "") => {
//     const nodeElement = document.createElement(tagType);
//     nodeElement.setAttribute("class", className);
//     nodeElement.setAttribute("src", imgSrc);
//     nodeElement.textContent = text;

//     return nodeElement;
// };

// --------------------------------------------------------------

// data.meals.forEach((element) => {
//   const mealTitle = element.strMeal;
//   const mealTitleElement = createNodeElement("h2", { class: "meal-title" }, mealTitle);
//   console.log(mealTitleElement);
//   divRoot.appendChild(mealTitleElement);
// });

const button = document.querySelector("button");

// au click sur le bouton
button.addEventListener("click", async () => {
    const divRoot = document.querySelector("#root");

    // je fais un appel fetch (asynchrone) vers l'url de l'api
    const responseJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
    // quand j'ai le résultat, je converti le json récupéré en Javascript
    const responseJavascript = await responseJson.json();

    //  j'utilise foreach pour faire une boucle sur le résultat
    // et pour chaque élément (recette), j'affiche le titre et l'image
    responseJavascript.meals.forEach((meal) => {
        // j'utilise ma fonction createNodeElement pour créer un h2
        // avec en valeur le titre de la recette de l'api
        const mealTitleElement = createNodeElement(
            "h2",
            {
                class: "meal-title",
            },
            meal.strMeal
        );

        // j'insère le titre dans ma div root
        divRoot.appendChild(mealTitleElement);

        // j'utilise ma fonction createNodeElement pour créer une image
        // avec en valeur l'image de la recette de l'api
        const mealImgElement = createNodeElement("img", {
            src: meal.strMealThumb,
        });

        // j'insère l'image dans ma div root
        divRoot.appendChild(mealImgElement);
    });
});
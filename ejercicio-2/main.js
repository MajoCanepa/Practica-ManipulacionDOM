const programacion = [
    {
        titulo: "Python",
        descripcion: "Lenguaje de programación ampliamente utilizado en las aplicaciones web.",
        imagen: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    },
    {
        titulo: "JavaScript",
        descripcion: "Lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas.",
        imagen: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png",
    },
    {
        titulo: "HTML 5",
        descripcion: "Lenguaje de etiquetas, utilizado para la estructuración y la presentación de contenido en los sitios web.",
        imagen: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png",
    },
    {
        titulo: "PHP",
        descripcion: "Lenguaje de programación que permite el desarrollo web o aplicaciones web dinámicas.",
        imagen: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/256_Php_logo-512.png",
    },
    
]
const container = document.getElementById("container");

container.innerHTML += programacion
  .map((programacion) => {
    return `
        <div class="card my-card d-flex" style="max-width: 18rem;">
            <img src="${programacion.imagen}" class="card-img-top my-img" alt="${programacion.titulo}">
            <div class="card-body ">
                <h5>${programacion.titulo}</h5>
                <p>${programacion.descripcion}</p>
            </div>
        </div>
    `;
  })
  .join("");

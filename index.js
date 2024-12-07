// FOREACH: Ejecuta una función para cada elemento del array. Ideal para recorrerlo sin modificarlo y realizar una logica en el medio. 


// Lista de superhéroes
const heroes = [
    {
        nombre: "Superman",
        edad: 35,
        foto:'https://resizer.glanacion.com/resizer/v2/asi-se-veria-superman-en-la-vida-real-segun-la-SS2YWWIXDVEPPIPZDHJII7NWTM.PNG?auth=ba47cfa4417daa14555b3e27c76bd60d60c3123c13c3e02b8fd2abb742d81fef&width=1200&quality=70&smart=false&height=776'
    },
    {
        nombre: "Batman",
        edad: 35,
        foto: 'https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg'
    },
    {
        nombre: "Spiderman",
        edad: 35,
        foto: 'https://lumiere-a.akamaihd.net/v1/images/au_marvel_spiderman60th_hero_r_823e6bbf.jpeg?region=0,0,2400,1002'
    }
];

// Crear el contenido completo del contenedor
let contenidoHTML = `
    <div class="row justify-content-center">
`;

// Generar las tarjetas y añadirlas al contenido
heroes.forEach((heroe) => {
    contenidoHTML += `
        <div class="col-md-3">
            <div class="card" style="width: 18rem;">
                <img src="${heroe.foto}" class="card-img-top" alt="${heroe.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${heroe.nombre}</h5>
                    <p class="card-text">Edad: ${heroe.edad}</p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    `;
});

// Cerrar el div de la fila
contenidoHTML += `</div>`;

// Agregar todo el contenido al contenedor
document.getElementById("contenedor").innerHTML = contenidoHTML;
//Banco de imagenes locales
const bancoDeImagenes = [
'img/jeep.webp', 
'img/mercedes.jpg',
'https://www.bmwusa.com/content/dam/bmwusa/common/vehicles/2023/my24/x-models/x7/overview/desktop/BMW-MY24-X7-Overview-Form-03-Desktop.jpg',
//Img por vinculo.
'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/action-slc.jpg?itok=cDeYZGOz',
'https://es.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/equipment/3-2/24_Mustang_Dark_Horse_13_32.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg',
'https://www.bmwusa.com/content/dam/bmwusa/common/vehicles/2023/my24/m-models/m8-gran-coupe/overview/desktop/BMW-MY24-8Series-M8-GranCoupe-Overview-Makeityours-04-Desktop.jpg'

];
const boton = document.getElementsByClassName('boton')[0];

// Índice para rastrear la posición actual en el array
let indiceActual = 0;

boton.addEventListener('click', cambiarImagen);

function cambiarImagen() {
    // Obtén la imagen actual según el índice
    const cambioDeImagen = bancoDeImagenes[indiceActual];
    
    // Incrementa el índice para pasar a la siguiente imagen
    indiceActual = (indiceActual + 1) % bancoDeImagenes.length;

    const imagen = document.getElementsByClassName('fotos')[0];
    imagen.src = cambioDeImagen;
}

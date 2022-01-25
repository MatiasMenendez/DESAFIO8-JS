/*Simulador de presupuesto de plancha de metal*/

/*Variables*/
let tipoDeMaterial = prompt ('Material: hierro, inoxidable o bronce')
let medida1 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 3000)')) /1000
let medida2 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 1500)')) /1000
let espesor = Number (prompt ('Indicar espesor en numeros ( ejemplo 0.7 o 2)'))
var valorDolar = 108
var pesoEspecifico = 7.2

const inoxidable = new Material('inoxidable', 1300, true, 7.2, medida1, medida2, espesor);
const hierro = new Material('hierro', 330, true, 7.2, medida1, medida2, espesor);
const bronce = new Material('bronce', 500, false, 7,2, medida1, medida2, espesor);

/*Funcion encargada de hacer la cuenta del valor de la plancha de metal (con los valores dados a los objetos)*/
function verificarStockHierro(){
    if (hierro.disponibilidad == true){
        alert('Tenemos material para realizar el trabajo')
    }
    else if (hierro.disponibilidad == false){
        alert('No contamos con material para realizar el trabajo, por favor contactarse mas adelante')
    }
}

function verificarStockInoxidable(){
    if (inoxidable.disponibilidad == true){
        alert('Tenemos material para realizar el trabajo')
    }
    else if (inoxidable.disponibilidad == false){
        alert('No contamos con material para realizar el trabajo, por favor contactarse mas adelante')
    }
}

function verificarStockBronce(){
    if (bronce.disponibilidad == true){
        alert('Tenemos material para realizar el trabajo')
    }
    else if (bronce.disponibilidad == false){
        alert('No contamos con material para realizar el trabajo, por favor contactarse mas adelante')
    }
}

function calcularPresupuesto(){
    if (tipoDeMaterial === 'hierro'){{
    let precioHierro = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo;
    alert(precioHierro + 'pesos')
    let precioDolarH = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo / valorDolar;
    alert(precioDolarH + 'dolares')}
    verificarStockHierro();}

    else if(tipoDeMaterial === 'inoxidable'){
    let precioInoxidable = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo;
    alert(precioInoxidable + 'pesos')
    let precioDolarI = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo / valorDolar;
    alert(precioDolarI + 'dolares')}

    else if(tipoDeMaterial === 'bronce'){{
        let precioBronce = bronce.medida1 * bronce.medida2 * bronce.espesor * bronce.pesoEspecifico * bronce.precioPorKilo;
        alert(precioBronce + 'pesos')
        let precioDolarB = bronce.medida1 * bronce.medida2 * bronce.espesor * bronce.pesoEspecifico * bronce.precioPorKilo / valorDolar;
        alert(precioDolarB + 'dolares')}
        verificarStockBronce();}
}

calcularPresupuesto();



/*Arrays*/

/*Mostrar precio en orden numerico*/
console.log('Lista de materiales en orden de precio')
const materiales = [hierro, inoxidable, bronce];
materiales.sort(function (a, b) {
    if (a.precioPorKilo > b.precioPorKilo) {
      return 1;
    }
    if (a.precioPorKilo < b.precioPorKilo) {
      return -1;
    }
    return 0;
  });
  console.log(materiales)

/*Muestra desde la array de arriba todos los materiales que tenemos y su precio por kilo */
console.log('Lista de materiales con precio correspondiente')
for (const material of materiales){
    console.log(material.nombre);
    console.log(material.precioPorKilo);
}

/*Muestra el material mas economico en stock*/
console.log('Detalles del material mas economico en stock')
const buscarMaterialEconomico = materiales.find(material => material.precioPorKilo === 330);
console.log(buscarMaterialEconomico);


/*DOM*/
/*Replica de la tabla que se encuentra en HTML la cual indica los valores asignados en los prompt + el valor en pesos y dolares del producto*/
const div = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const div10 = document.createElement("div");
const section = document.createElement("section");
const form = document.createElement("form");
const label = document.createElement("label");
const label2 = document.createElement("label");
const label3 = document.createElement("label");
const label4 = document.createElement("label");
const label5 = document.createElement("label");
const input= document.createElement("input");
const input2= document.createElement("input");
const input3= document.createElement("input");
const input4= document.createElement("input");
const input5= document.createElement("input");

document.body.appendChild(section);
section.appendChild(form);

form.appendChild(div);
div.appendChild(div2);
div.appendChild(label);
div.appendChild(input);

form.appendChild(div3);
div3.appendChild(div4);
div3.appendChild(label2);
div3.appendChild(input2);

form.appendChild(div5);
div5.appendChild(div6);
div5.appendChild(label3);
div5.appendChild(input3);

form.appendChild(div7);
div7.appendChild(div8);
div7.appendChild(label4);
div7.appendChild(input4);

form.appendChild(div9);
div9.appendChild(div10);
div9.appendChild(label5);
div9.appendChild(input5);


label.innerHTML = "Ancho de plancha"
label2.innerHTML = "Alto de plancha"
label3.innerHTML = "Espesor del material"
label4.innerHTML = "Precio en pesos"
label5.innerHTML = "Precio en dolares"

input.value = medida1*1000;
input2.value = medida2*1000;
input3.value = espesor;

if (tipoDeMaterial === 'hierro'){{
    let precioHierro = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo;
    input4.value = precioHierro;
    let precioDolarH = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo / valorDolar;
    input5.value = precioDolarH;}
    }

    else if(tipoDeMaterial === 'inoxidable'){
    let precioInoxidable = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo;
    input4.value = precioInoxidable;
    let precioDolarI = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo / valorDolar;
    input5.value = precioDolarI;}

    else if(tipoDeMaterial === 'bronce'){{
        let precioBronce = bronce.medida1 * bronce.medida2 * bronce.espesor * bronce.pesoEspecifico * bronce.precioPorKilo;
        input4.value = precioBronce;
        let precioDolarB = bronce.medida1 * bronce.medida2 * bronce.espesor * bronce.pesoEspecifico * bronce.precioPorKilo / valorDolar;
        input5.value = precioDolarB;}
    }
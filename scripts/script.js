function funcionSubmit(event) {
    event.preventDefault();
}

let valorhora;
let tipo;
let horas;
let descuento;
let valorinicial;
let valortotal;

document.getElementById("comp").style.display = "none"


function calcular() {
    if(
        document.getElementById("number_hours").value !== '' && 
        document.getElementById("type_vehicle").value !== ''
    ){
        horas = Number(document.getElementById("number_hours").value)
        tipo = document.getElementById("type_vehicle").value;
        

        valor = Valor_servicio(horas);
        descuento = Descuento(tipo, valor);
        valortotal = valor - descuento

        document.getElementById("comp").style.display = "grid"
        document.getElementById("initial_value").value = valor
        document.getElementById("discount").value = descuento
        document.getElementById("total").value = valortotal
    }
}

function Valor_servicio(horas) {
    if (horas > 0 && horas <= 2) {
        valorhora = 5000;
        valorinicial = (horas * valorhora)
    }
    else if (horas >= 3 && horas <= 5) {
        valorhora = 4000;
        valorinicial = (2 * 5000) + ((horas - 2) * valorhora);
    }
    else if (horas > 5 && horas <= 10) {
        valorhora = 3000;
        valorinicial = (2 * 5000) + (3 * 4000) + ((horas - 5) * valorhora);
    }
    else if (horas > 10) {
        valorhora = 2000;
        valorinicial = (2 * 5000) + (3 * 4000) + (5 * 3000) + ((horas - 10) * valorhora);
    }
    return valorinicial;
}

function Descuento(tipo, valorinicial) {
    switch (tipo) {
        case "Carro":
            descuento = valorinicial * 0.10;
            break;
        case "Moto":
            descuento = valorinicial * 0.15;
            break;
        default:
            alert('')
    }
    return descuento;
}
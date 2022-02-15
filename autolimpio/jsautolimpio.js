// el evento DOMContentLoaded nos asegura que nuestro código
// se va a ejecutar cuando todo el HTML ya haya sido cargado 
window.addEventListener('DOMContentLoaded', (eventoLoaded) => {
    document.querySelector("form").addEventListener(
        "submit", (eventoSubmit) => {
            eventoSubmit.preventDefault();
            const email = document.querySelector("#email").value;
            const contrasena = document.querySelector("#contrasena").value;
            const emailValido = emailEsValido(email);
            const contrasenaValida = contrasenaEsValida(contrasena);
            const usuarioOk = checkUsuario(email, contrasena);
            if (emailValido &&
                contrasenaValida &&
                usuarioOk
            ) {
                redirigirAPaginaPrincipal();
            } else {
                mostrarMensajesError();
            }
            return false;
        });
});

function redirigirAPaginaPrincipal() {
    window.location = "basededatos.html";
}

function mostrarMensajesError() {
    // <div class="alert alert-danger" role="alert">Lorem</div>
    const divAlerta = document.createElement("div");
    divAlerta.className = "alert alert-danger";
    divAlerta.setAttribute("role", "alert");
    const mensaje = document.createTextNode("Por favor revise que su email o contraseña sean correctos.");
    divAlerta.appendChild(mensaje);
    document.querySelector("#mensajes").appendChild(divAlerta);
}

function emailEsValido(email) {
    const emailRegexp = new RegExp(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i
    );
    return emailRegexp.test(email);
}

function contrasenaEsValida(contrasena) {
    if (contrasena.length >= 3) {
        return true;
    } else {
        return false;
    }
}

function checkUsuario(email, contrasena) {
    if (email == "kamila@hotmail.com" && contrasena == "159753A") {
        return true;
    } else {
        return false;
    }
}


const boton = document.getElementById("btnCalcular");
const newLocal = "click";
boton.addEventListener(newLocal, () => {
    // reviso si están checkeados los servicios
    const lavadoExterior = $("#lavadoExterior").prop("checked");
    const lavadoMotor = $("#lavadoMotor").prop("checked");
    var nombreCombo = document.getElementById("prestador").value; // Valor
    var combo = document.getElementById("prestador"); 
    var selected = combo.options[combo.selectedIndex].text; // Texto

    // creo variable para hacer cálculo
    let montoNeto = 0;

    if (lavadoExterior) {
        montoNeto = montoNeto + 7000;
    }

    if (lavadoMotor) {
        montoNeto = montoNeto + 5000;
    }

    // cálculo impuesto y total 
    const impuesto = montoNeto * 0.19;
    const total = montoNeto + impuesto;

    // cargo los datos a pantalla 
    document.getElementById("neto").innerHTML = `<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML = `<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML = `<span>$ ${total}</span>`;
    document.getElementById("prestadors").innerHTML = `<span> ${selected}</span>`;

});


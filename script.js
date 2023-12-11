function ocultar(clase) {
    var elementos = document.getElementsByClassName(clase);
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'none';
    }
}

function mostrar(clase) {
    var elementos = document.getElementsByClassName(clase);
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'block';
    }
}

function calcHid() {
    let peso = Number(document.getElementById('peso').value);
    console.log(peso);
    var diario;
    var mantenimiento;
    var mm2;

    if (peso == 0) {
        ocultar('resultado');
        document.getElementById('error').style.display = 'block';
    } else if (peso < 30) {
        diario = peso * 100;
        mantenimiento = (diario / 24).toFixed(2);
        mm2 = (mantenimiento * 1.5).toFixed(2);

        ocultar('resultado');
        document.getElementById('diario').innerHTML = "Volumen diario en cc: " + diario;
        document.getElementById('man').innerHTML = "Mantenimiento: " + mantenimiento + " cc/hr";
        document.getElementById('mm2').style.display = 'block';
        document.getElementById('mm2').innerHTML = "m+m/2: " + mm2 + " cc/hr";
        document.getElementById('tipores').innerHTML = "Se utilizó el método Holliday-Segar";
    } else {
        diario = ((peso * 4) + 7) / (peso + 90);
        let sc1500 = diario * 1500;
        let sc2000 = diario * 2000;

        ocultar('resultado');
        document.getElementById('diario').innerHTML = "SC*1500: " + (sc1500).toFixed(2) + 'cc';
        document.getElementById('man').innerHTML = "SC*2000: " + (sc2000).toFixed(2) + 'cc';
        document.getElementById('tipores').innerHTML = "Se utilizó el método de Superficie Corporal.";
    }

    // Mostrar resultados después de procesar la lógica
    mostrar('resultado');
}

document.getElementById('formRecoleccion').addEventListener('submit', function(e) {
  e.preventDefault();
  const fecha = document.getElementById('fecha').value;
  const tipo = document.getElementById('tipo').value;
  const ubicacion = document.getElementById('ubicacion').value;
  const observaciones = document.getElementById('observaciones').value;

  alert(`Solicitud enviada:\nFecha: ${fecha}\nTipo: ${tipo}\nUbicación: ${ubicacion}\nObservaciones: ${observaciones}`);
});

function volverInicio() {
  alert("Volviendo al inicio...");
}

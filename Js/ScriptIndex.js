document.getElementById('formRecoleccion').addEventListener('submit', function(e) {
  e.preventDefault();

  const direccion = document.getElementById('ubicacion').value.trim();
  const fecha = document.getElementById('fecha').value;

  if (direccion !== "") {
    let datos = JSON.parse(localStorage.getItem('solicitudes')) || [];

    // Guardar como objeto
    datos.push({ direccion: direccion, fecha: fecha });

    localStorage.setItem('solicitudes', JSON.stringify(datos));

    alert("Solicitud registrada con éxito.");
    this.reset();
  } else {
    alert("Por favor, ingresa la dirección.");
  }
});

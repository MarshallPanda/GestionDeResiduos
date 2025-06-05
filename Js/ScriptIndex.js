document.getElementById('formRecoleccion').addEventListener('submit', function(e) {
  e.preventDefault();

  const ubicacion = document.getElementById('ubicacion').value.trim();
  if (ubicacion !== "") {
    let datos = JSON.parse(localStorage.getItem('solicitudes')) || [];
    datos.push(ubicacion);
    localStorage.setItem('solicitudes', JSON.stringify(datos));
    alert("Solicitud registrada con éxito.");
    this.reset();
  } else {
    alert("Por favor, completa la ubicación.");
  }
});

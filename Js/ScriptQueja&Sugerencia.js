document.addEventListener('DOMContentLoaded', () => {
  const fecha = document.getElementById('fecha');
  fecha.value = new Date().toISOString().split('T')[0]; // Fecha actual

  document.getElementById('formMensaje').addEventListener('submit', function(e) {
    e.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const mensaje = document.getElementById('mensaje').value.trim();
    const destino = document.getElementById('destino').value;
    const fechaIncidente = fecha.value;

    if (!tipo || !mensaje || !destino || !fechaIncidente) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const datos = JSON.parse(localStorage.getItem('mensajes')) || [];
    datos.push({ tipo, mensaje, destino, fecha: fechaIncidente });
    localStorage.setItem('mensajes', JSON.stringify(datos));

    alert("Tu mensaje ha sido enviado con éxito.");
    this.reset();
    fecha.value = new Date().toISOString().split('T')[0];
  });
});

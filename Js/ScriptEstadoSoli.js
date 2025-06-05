document.addEventListener('DOMContentLoaded', () => {
  const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
  const select = document.getElementById('solicitud');
  const direccion = document.getElementById('direccion');
  const fecha = document.getElementById('fecha');

  // Llenar combo con solicitudes
  solicitudes.forEach((direccionTexto) => {
    const option = document.createElement('option');
    option.value = direccionTexto;
    option.textContent = direccionTexto;
    select.appendChild(option);
  });

  // Obtener fecha actual en formato YYYY-MM-DD
  const fechaHoy = new Date().toISOString().split('T')[0];

  // Mostrar dirección y fecha al seleccionar una solicitud
  select.addEventListener('change', () => {
    if (select.value !== "Selecciona tu solicitud") {
      direccion.value = select.value;
      fecha.value = fechaHoy;
    } else {
      direccion.value = "";
      fecha.value = "";
    }
  });
});

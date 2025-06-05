document.addEventListener('DOMContentLoaded', () => {
  const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
  const select = document.getElementById('solicitud');
  const direccion = document.getElementById('direccion');
  const fecha = document.getElementById('fecha');

  // Mostrar: Dirección – Fecha en el select
  solicitudes.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = index;  // Usamos el índice para identificar la posición
    option.textContent = `${item.direccion} – ${item.fecha}`;
    select.appendChild(option);
  });

  // Al seleccionar, cargar solo la dirección y la fecha actual
  select.addEventListener('change', () => {
  const selectedIndex = select.value;
  if (selectedIndex !== "Selecciona tu solicitud") {
    const datos = solicitudes[selectedIndex];
    direccion.value = datos.direccion; // ← ahora editable
    fecha.value = new Date().toISOString().split('T')[0];
  } else {
    direccion.value = "";
    fecha.value = "";
  }
});
});

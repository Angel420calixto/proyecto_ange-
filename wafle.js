function enviarPedido(event) {
    event.preventDefault();

    const form = document.getElementById("formWaffle");
    const base = form.base.value;
    const frutas = form.frutas.value;
    const toppings = form.toppings.value;
    const salsas = form.salsas.value;
    const direccion = form.direccion.value;

    const mensaje = `🍓 Pedido de Waffle 🍫%0A
  👉 Base: ${base}%0A
  👉 Frutas: ${frutas}%0A
  👉 Toppings: ${toppings}%0A
  👉 Salsas: ${salsas}%0A
  🏠 Dirección: ${direccion}`;

    const telefono = "56977733911"; // tu número de WhatsApp
    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(url, "_blank");
}
// Switch Case

const metodoPago = "cheque";

switch (metodoPago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "credito":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "débito":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log("Otro método de pago");
    break;
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const [cartItems] = useState([
    {
      id: 1,
      image: "url_de_imagen_1",
      description: "Descripción del producto 1",
      price: 100.0,
    },
    {
      id: 2,
      image: "url_de_imagen_2",
      description: "Descripción del producto 2",
      price: 150.0,
    },
    // Agregar más elementos al carrito si es necesario
  ]);

  const handlePaymentButtonClick = () => {
    const formattedInvoice = formatInvoice(cartItems);
    const whatsappLink = generateWhatsAppLink(formattedInvoice);

    window.location.href = whatsappLink;
  };

  const formatInvoice = (items) => {
    let invoiceText = "Detalle de la compra:\n";

    items.forEach((item) => {
      invoiceText += `\nProducto: ${item.description}\n`;
      invoiceText += `Precio: $${item.price}\n`;
    });

    return invoiceText;
  };

  const generateWhatsAppLink = (text) => {
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/3175533775/?text=${encodedText}`;
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>
        <button
          onClick={handlePaymentButtonClick}
          className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
        >
          Ver factura y enviar por WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Payment;

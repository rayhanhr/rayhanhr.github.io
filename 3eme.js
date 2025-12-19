const burgerSelect = document.getElementById("burger");
const quantiteInput = document.getElementById("quantite");
const totalSpan = document.getElementById("total");
const form = document.getElementById("orderForm");

// Calcul automatique du total
function updateTotal() {
  const price = parseFloat(burgerSelect.value);
  const qty = parseInt(quantiteInput.value);
  totalSpan.textContent = (price * qty).toFixed(2);
}

burgerSelect.addEventListener("change", updateTotal);
quantiteInput.addEventListener("input", updateTotal);

// Envoi de la commande
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const tel = document.getElementById("tel").value;
  const adresse = document.getElementById("adresse").value;
  const burger = burgerSelect.options[burgerSelect.selectedIndex].text;
  const qty = quantiteInput.value;
  const total = totalSpan.textContent;
  const paiement = document.getElementById("paiement").value;

  const message =
    `Commande Le 3ème Thionville\n\n` +
    `Nom : ${nom}\n` +
    `Téléphone : ${tel}\n` +
    `Adresse : ${adresse}\n` +
    `Burger : ${burger}\n` +
    `Quantité : ${qty}\n` +
    `Total : ${total} €\n` +
    `Paiement : ${paiement}`;

  const url = "https://wa.me/33641143836?text=" + encodeURIComponent(message);
  window.location.href = url;
});

updateTotal();

// Année du pied de page
document.getElementById("year").textContent = new Date().getFullYear();

// Bouton « Copier » pour l'adresse e-mail
const copyButton = document.getElementById("copy");
const email = document.getElementById("email");

function selectEmail() {
  const range = document.createRange();
  range.selectNodeContents(email);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email.textContent.trim());
    copyButton.textContent = "Copié";
  } catch (error) {
    selectEmail();
    copyButton.textContent = "Sélectionné";
  }
  setTimeout(() => { copyButton.textContent = "Copier"; }, 2000);
});

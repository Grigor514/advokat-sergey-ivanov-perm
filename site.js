const maxDialog = document.querySelector("#max-dialog");
const copyPhone = document.querySelector("#copy-phone");
const copyFeedback = document.querySelector("#copy-feedback");

document.querySelectorAll("[data-open-max]").forEach((button) => {
  button.addEventListener("click", () => maxDialog.showModal());
});

document.querySelector("[data-close-max]").addEventListener("click", () => maxDialog.close());
maxDialog.addEventListener("click", (event) => {
  if (event.target === maxDialog) maxDialog.close();
});

copyPhone.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("+79824592636");
    copyFeedback.textContent = "Номер скопирован";
  } catch {
    copyFeedback.textContent = "Номер: +7 (982) 459-26-36";
  }
});

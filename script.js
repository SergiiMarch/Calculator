// =зміна кількості кг під час пересування повзунка
const refs = {
  form: document.getElementById("form"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
};
refs.form.addEventListener("input", handleFormInput);

function handleFormInput(evt) {
  console.log(evt.target.value);
  const { target } = evt;
  if (target.name === "quantity") {
    refs.amount.textContent = target.value;
  }
}

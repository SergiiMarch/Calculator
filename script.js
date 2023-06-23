// =зміна кількості кг під час пересування повзунка
const refs = {
  form: document.getElementById("form"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
  price: document.getElementById("price"),
  quantity: document.getElementById("quantity"),
};
refs.form.addEventListener("input", handleFormInput);

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};

function handleFormInput(evt) {
  const { target } = evt;
  if (target.name === "quantity") {
    refs.amount.textContent = target.value;
  }
  target.setAttribute("value", target.value);
  dataFill();
  displayData();
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
}

function displayData() {
  refs.total.textContent = data.calcTotalPrice() + "UAN";
}

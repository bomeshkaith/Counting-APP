const countValue = document.getElementById("counting");

function increase() {
  let value = parseInt(countValue.innerText);
  value = value + 1;
  countValue.innerText = value;
}

function decrease() {
  let value = parseInt(countValue.innerText);
  value = value - 1;
  countValue.innerText = value;
}

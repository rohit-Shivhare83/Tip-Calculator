const billAmount = document.getElementById("input-bill");
const numberOfPeople = document.getElementById("noofpeople");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

const five = document.getElementById("btn-5");
const ten = document.getElementById("btn-10");
const fif = document.getElementById("btn-15");
const twent_fiv = document.getElementById("btn-25");
const fifty = document.getElementById("btn-50");

function calculate5() {
  let a = (billAmount.value * (five.value / 100)) / numberOfPeople.value;
  let t = (tipAmount.innerHTML = Math.floor(a));
  total.innerHTML = Math.floor(t / numberOfPeople.value);
}
function calculate10() {
  let b = (billAmount.value * (ten.value / 100)) / numberOfPeople.value;
  let t = (tipAmount.innerHTML = Math.floor(b));
  total.innerHTML = Math.floor(t / numberOfPeople.value);
}
function calculate15() {
  let c = (billAmount.value * (fif.value / 100)) / numberOfPeople.value;
  let t = (tipAmount.innerHTML = Math.floor(c));
  total.innerHTML = Math.floor(t / numberOfPeople.value);
}
function calculate25() {
  let d = (billAmount.value * (twent_fiv.value / 100)) / numberOfPeople.value;
  let t = (tipAmount.innerHTML = Math.floor(d));
  total.innerHTML = Math.floor(t / numberOfPeople.value);
}
function calculate50() {
  let e = (billAmount.value * (fifty.value / 100)) / numberOfPeople.value;
  let t = (tipAmount.innerHTML = Math.floor(e));
  total.innerHTML = Math.floor(t / numberOfPeople.value);
}

function reset() {
  billAmount.value = "";
  numberOfPeople.value = 1;
  total.innerHTML = 0;
  tipAmount.innerHTML = 0;
}

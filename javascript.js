const button = document.querySelector("button");
const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const in3 = document.querySelector("#in3");
const p = document.querySelector("p");

button.addEventListener("click", function () {
  if (in1.value && in2.value && in3.value) {
    if (Number(in1.value) >= Number(in2.value) + Number(in3.value)) {
      let percentage =
        100 *
        ((3 * Number(in2.value) - Number(in3.value)) / (Number(in1.value) * 3));
      p.innerHTML = parseFloat(percentage).toFixed(2) + "%";
    } else {
      alert("مجموع سوالات درست و غلط بیشتر از تعداد کل سوالات است.");
    }

    if (p.style.maxHeight) {
      p.style.maxHeight = null;
    } else {
      p.style.maxHeight = p.scrollHeight + "px";
    }
  } else {
    alert("لطفا همه ی فیلدها را پر کنید.");
  }
});

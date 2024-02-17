const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const in3 = document.getElementById("in3");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  if (in1.value && in2.value && in3.value) {
    if (Number(in1.value) >= Number(in2.value) + Number(in3.value)) {
      if (Number(in1.value == 0)) {
        alert("اشتباه است.");
      } else {
        let percentage =
          100 *
          ((3 * Number(in2.value) - Number(in3.value)) /
            (Number(in1.value) * 3));
        p.innerHTML = percentage.toFixed(2) + "%";
      }
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

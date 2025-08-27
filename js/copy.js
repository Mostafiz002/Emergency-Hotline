const copyCount = document.getElementById("copy-count");
let totalCopy = 0;

const copyButtons = document.getElementsByClassName("copy-buttons");

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const num = numbers[i].innerText;
    navigator.clipboard.writeText(num);
    alert("Number has been copied: " + num);

    totalCopy++;
    copyCount.innerText = totalCopy;
  });
}


const heartCount = document.getElementById("heart-count");
let count = 0;

const hearts = document.getElementsByClassName("heart-btn");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    count++;
    heartCount.innerText = count;
  });
}

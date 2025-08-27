let availableBalance = parseInt(
  document.getElementById("available-balance").innerText
);

const services = document.getElementsByClassName("services");
const numbers = document.getElementsByClassName("number");
const calls = document.getElementsByClassName("call-btn");

for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function () {
    const service = services[i].innerText;
    const num = numbers[i].innerText;
    
    if (availableBalance > 0) {
      availableBalance -= 20;
      document.getElementById("available-balance").innerText = availableBalance;

      alert("📞 Calling " + service + " " + num + "...");
    } else {
      alert("❌ You don’t have enough balance. You need at least 20 coins to make a call.");
    }
  });
}

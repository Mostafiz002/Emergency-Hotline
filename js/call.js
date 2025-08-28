let availableBalance = parseInt(
  document.getElementById("available-balance").innerText
);

const services = document.getElementsByClassName("services");
const serviceTitles = document.getElementsByClassName("service-title");
const numbers = document.getElementsByClassName("number");
const calls = document.getElementsByClassName("call-btn");

for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function () {
    const serviceTitle = serviceTitles[i].innerText;
    const service = services[i].innerText;
    const num = numbers[i].innerText;
    const time = new Date().toLocaleTimeString();

    if (availableBalance > 0) {
      availableBalance -= 20;
      document.getElementById("available-balance").innerText = availableBalance;

      alert("📞 Calling " + service + " " + num + "...");

      const historyContainer = document.getElementById("call-history-cont");
      const div = document.createElement("div");
      div.innerHTML = `
      <div
              class="mt-3 p-4 bg-[#fafafa] flex justify-between items-center rounded-lg gap-2"
            >
              <div>
                <h4 class="text-[14px] md:text-base font-semibold text-black">
                  ${serviceTitle}
                </h4>
                <p class="text-gray-600 text[12] md:text-sm">${num}</p>
              </div>
              <div>
                <p class="text-[12px] font-normal text-black">${time}</p>
              </div>
            </div>
      `;

      historyContainer.appendChild(div);
    } else {
      alert(
        "❌ You don’t have enough balance. You need at least 20 coins to make a call."
      );
    }
  });
}

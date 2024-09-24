document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});
// create function
function historySection(inputBalance){
  const value = document.getElementById('h1-text').innerText;
  const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white lg:p-6 p-2 rounded-md w-8/12 lg:h-24 h-26 border border-gray-500 mx-auto";
    historyItem.innerHTML = `
    <p class="lg:text-xl text-black font-bold">${inputBalance} Taka ${value}</p>
    <p class="text-xs text-gray-500 mt-2">Date: ${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `;
    const historyContainer = document.getElementById("history-section");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

document.getElementById("donate-button").addEventListener("click", function () {
  const inputBalance = parseFloat(
    document.getElementById("input-balance").value
  );
  if (inputBalance <= 0 || isNaN(inputBalance)) {
    alert("Please enter a valid donation amount.");
   return;
  };
  const modal = document.getElementById("my_modal_1");
  modal.showModal();

  const pBalance = parseFloat(document.getElementById("p-balance").innerText);
  const addMoney = inputBalance + pBalance;
  document.getElementById("p-balance").innerText = addMoney;
  const totalAmount = parseFloat(
    document.getElementById("total-amount").innerText
  );
  const evenAmount = totalAmount - inputBalance;
  document.getElementById("total-amount").innerText = evenAmount;

  // history section
  historySection(inputBalance);
});
document
  .getElementById("donate-button2")
  .addEventListener("click", function () {
    const inputBalance = parseFloat(
      document.getElementById("input-balance2").value
    );
    if (inputBalance <= 0 || isNaN(inputBalance)) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const modal = document.getElementById("my_modal_1");
    modal.showModal();

    const pBalance = parseFloat(
      document.getElementById("p-balance2").innerText
    );
    const addMoney = inputBalance + pBalance;
    document.getElementById("p-balance2").innerText = addMoney;
    const totalAmount = parseFloat(
      document.getElementById("total-amount").innerText
    );
    const evenAmount = totalAmount - inputBalance;
    document.getElementById("total-amount").innerText = evenAmount;

    // history section
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white lg:p-6 p-2 rounded-md w-8/12 lg:h-24 h-26 border border-gray-500 mx-auto";
    historyItem.innerHTML = `
    <p class="lg:text-xl text-black font-bold">${inputBalance} Taka Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="text-xs text-gray-500 mt-2">Date: ${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `;
    const historyContainer = document.getElementById("history-section");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });
document
  .getElementById("donate-button3")
  .addEventListener("click", function () {
    const inputBalance = parseFloat(
      document.getElementById("input-balance3").value
    );
    if (inputBalance <= 0 || isNaN(inputBalance)) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const modal = document.getElementById("my_modal_1");
    modal.showModal();

    const pBalance = parseFloat(
      document.getElementById("p-balance3").innerText
    );
    const addMoney = inputBalance + pBalance;
    document.getElementById("p-balance3").innerText = addMoney;
    const totalAmount = parseFloat(
      document.getElementById("total-amount").innerText
    );
    const evenAmount = totalAmount - inputBalance;
    document.getElementById("total-amount").innerText = evenAmount;

    // history section
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white lg:p-6 p-2 rounded-md w-8/12 lg:h-24 h-26 border border-gray-500 mx-auto";
    historyItem.innerHTML = `
    <p class="lg:text-xl text-black font-bold">${inputBalance} Taka Donate for Flood Relief in Thakurgoan,Bangladesh</p>
    <p class="text-xs text-gray-500 mt-2">Date: ${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `;
    const historyContainer = document.getElementById("history-section");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });
document
  .getElementById("default-button")
  .addEventListener("click", function () {
    const defaultButton = document.getElementById("default-button");
    const donationButton = document.getElementById("donation-button");
    donationButton.classList.add("btn-inactive");
    donationButton.classList.remove("btn-success");
    defaultButton.classList.add("btn-success");
    defaultButton.classList.remove("btn-inactive");

    const mainSection = document.getElementById("main-section");
    mainSection.classList.add("hidden");

    document.getElementById("history-container").classList.remove("hidden");
  });
document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    const defaultButton = document.getElementById("default-button");
    const donationButton = document.getElementById("donation-button");
    donationButton.classList.add("btn-success");
    donationButton.classList.remove("btn-inactive");
    defaultButton.classList.add("btn-inactive");
    defaultButton.classList.remove("btn-success");

    const mainSection = document.getElementById("main-section");
    mainSection.classList.remove("hidden");

    document.getElementById("history-container").classList.add("hidden");
  });

// for noakhali
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    // console.log("clicked");
    const inputDonate = getInputFieldValueById("input-donate-noakhali");
    //   console.log(inputDonate);

    const donateCardValue = getTextFieldValueById("donate-balance-noakhali");

    const mainbalance = getTextFieldValueById("main-balance");
    const isValid = /^[1-9]\d*$/.test(inputDonate);
    if (isValid) {
      // add money to card balance
      const donateCardBalance = donateCardValue + inputDonate;
      document.getElementById("donate-balance-noakhali").innerText =
        donateCardBalance;

      //   add money to main balance
      const mainBalanceUpdate = mainbalance + inputDonate;
      document.getElementById("main-balance").innerText = mainBalanceUpdate;
      document.getElementById("modal").showModal();

      // show to history
      const div = document.createElement("div");
      div.classList.add("lg:px-38");
      div.innerHTML = `
      <div class="my-5 font-bold border border-gray-200 px-8 py-10 rounded-md">
      <h2>${inputDonate} Taka is Donated for Famine-2024 at Noakhali, Bangladesh </h2>
      </div>
      `;
      document.getElementById("history-container").appendChild(div);
    } else {
      alert("Wrong Input");
    }
  });

//   for feni
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    // console.log("clicked");
    const inputDonate = getInputFieldValueById("input-donate-feni");
    //   console.log(inputDonate);

    const donateCardValue = getTextFieldValueById("donate-balance-feni");

    const mainbalance = getTextFieldValueById("main-balance");

    const isValid = /^[1-9]\d*$/.test(inputDonate);

    if (isValid) {
      // add money to card balance
      const donateCardBalance = donateCardValue + inputDonate;
      document.getElementById("donate-balance-feni").innerText =
        donateCardBalance;

      //   add money to main balance
      const mainBalanceUpdate = mainbalance + inputDonate;
      document.getElementById("main-balance").innerText = mainBalanceUpdate;
      document.getElementById("modal").showModal();

      // show to history
      const div = document.createElement("div");
      div.classList.add("lg:px-38");
      div.innerHTML = `
      <div class="my-5 font-bold border border-gray-200 px-8 py-10 rounded-md">
      <h2>${inputDonate} Taka is Donated for Flood Relief in Feni, Bangladesh </h2>
      </div>
      `;
      document.getElementById("history-container").appendChild(div);
    } else {
      alert("Wrong Input");
    }
  });

// for quota protest
document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    // console.log("clicked");
    const inputDonate = getInputFieldValueById("input-donate-quota");
    //   console.log(inputDonate);

    const donateCardValue = getTextFieldValueById("donate-balance-quota");

    const mainbalance = getTextFieldValueById("main-balance");

    const isValid = /^[1-9]\d*$/.test(inputDonate);

    if (isValid) {
      // add money to card balance
      const donateCardBalance = donateCardValue + inputDonate;
      document.getElementById("donate-balance-quota").innerText =
        donateCardBalance;

      //   add money to main balance
      const mainBalanceUpdate = mainbalance + inputDonate;
      document.getElementById("main-balance").innerText = mainBalanceUpdate;
      document.getElementById("modal").showModal();

      // show to history
      const div = document.createElement("div");
      div.classList.add("lg:px-38");
      div.innerHTML = `
      <div class="my-5 font-bold border border-gray-200 px-8 py-10 rounded-md">
      <h2>${inputDonate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
      </div>
      `;
      document.getElementById("history-container").appendChild(div);
    } else {
      alert("Wrong Input");
    }
  });

  // for footer 
 
  document.getElementById("copyright").textContent =
    `Copyright © ${new Date().getFullYear()} - All rights reserved by Md. Anik Islam`;



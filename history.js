document.getElementById("history").addEventListener("click", function () {
  showSection("donation-container");
  document.getElementById('history-container').classList.remove('hidden');
});

document.getElementById("donation").addEventListener("click", function () {
  document.getElementById("noakhali").classList.remove("hidden");
  document.getElementById("feni").classList.remove("hidden");
  document.getElementById("quota").classList.remove("hidden");
});

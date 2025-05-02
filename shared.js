function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValuenumber = parseFloat(inputValue);
  return inputValuenumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function showSection(id){
  document.getElementById('noakhali').classList.add('hidden');
  document.getElementById('feni').classList.add('hidden');
  document.getElementById('quota').classList.add('hidden');
 
}
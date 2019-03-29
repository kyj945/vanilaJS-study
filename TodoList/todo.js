let inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event) {
  if(event.which === 13) {
    let itemText = inputText.value.trim();
    addNewItem(itemText);
  }
}

const btnNew = document.getElementById('btnAdd');
btnNew.onclick = function () {
  let itemText = inputText.value.trim();
  addNewItem(itemText);
}

function addNewItem(itemText) {
  let list = document.getElementById('todolist');
  if(itemText !== "") {
    let listItem = document.createElement('li');
    listItem.innerText = itemText;
    list.appendChild(listItem);
  } else {
    alert('Empty!');
  }
  inputText.value = '';
  inputText.focus();
}

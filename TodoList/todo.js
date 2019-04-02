let inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event) {
  if(event.which === 13) {
    let itemText = inputText.value.trim();
    addNewItem(itemText);
  }
}

function addNewItem(itemText) {
  let list = document.getElementById('todolist');

  if(itemText !== "") {
    let ul = document.createElement('ul');
    ul.className = 'list-unstyled';
    let li = document.createElement('li')
    li.className = 'ui-state-default';
    let div = document.createElement('div');
    div.className = 'checkbox';
    let label = document.createElement('label');
    let removeBtn = '<button onclick="removeTodoItem(this)" class="remove-item btn btn-default btn-xs pull-right">X</button>';
    let checkbox = '<input type="checkbox" onclick="doneItem(this)" value="" />';
    let item = '<p>' + itemText + '</p>'

    label.innerHTML = checkbox + item;
    div.innerHTML = removeBtn;
    div.appendChild(label);

    li.appendChild(div);
    ul.appendChild(li);
    list.appendChild(ul);
  } else {
    alert('Empty!');
  }
  inputText.value = '';
  inputText.focus();
}

function doneItem(item) {
  let todolist = item.parentNode.parentNode.parentNode.parentNode;
  let todoItem = item.parentNode.parentNode.parentNode;

  todolist.removeChild(todoItem);
  let label = item.parentNode;

  let doneItem = label.lastChild.innerHTML;
  let removeBtn = '<button onclick="removeDoneItem(this)" class="remove-item btn btn-default btn-xs pull-right">X</button>';

  let donelist = document.getElementById('donelist');
  let ul = document.createElement('ul');
  ul.className = 'list-unstyled';
  let li = document.createElement('li');
  li.innerHTML = doneItem + removeBtn;

  ul.appendChild(li);
  donelist.appendChild(ul);
}

function removeTodoItem(item) {
    let todolist = item.parentNode.parentNode.parentNode.parentNode;
    let ul = item.parentNode.parentNode.parentNode;
    todolist.removeChild(ul);
}

function removeDoneItem(item) {
    let donelist = item.parentNode.parentNode;
    let ul = item.parentNode;
    donelist.removeChild(ul);
}

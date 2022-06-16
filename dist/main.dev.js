"use strict";

var btnClickEl = document.getElementById('toggle-btn');
var enterNameEl = document.getElementById('user-name');
var listEL = document.getElementById('list-elm');
listEL.classList.add('name-box-list');

var addElemItem = function addElemItem() {
  var val = document.getElementById('user-name').value;
  var newListEL = document.createElement('li');

  if (!val.trim()) {
    alert("Error no name entered!");
  } else {
    newListEL.innerHTML = val;
    listEL.append(newListEL);
    enterNameEl.value = '';
  }
};

btnClickEl.addEventListener('click', addElemItem);
enterNameEl.addEventListener('keydown', function (el) {
  if (el.code === 'Enter') addElemItem();
});
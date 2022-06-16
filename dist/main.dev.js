"use strict";

var btnClickEl = document.getElementById('toggle-btn');
var enterNameEl = document.getElementById('user-name');
var listEL = document.getElementById('list-elm');
listEL.classList.add('name-box-list');

btnClickEl.onclick = function () {
  var val = document.getElementById('user-name').value;
  var newListEL = document.createElement('li');

  if (enterNameEl.value === '') {
    alert("Error no name entered!");
  } else {
    newListEL.innerHTML = val;
    listEL.append(newListEL);
    enterNameEl.value = '';
  }
};
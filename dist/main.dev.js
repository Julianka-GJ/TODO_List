"use strict";

(function () {
  var loginFormEl = document.getElementById('login-form');
  var emailinputEl = document.getElementById('email');
  var passwordInputEl = document.getElementById('password');
  var loginBtnEl = document.getElementById('button-login');
  var spanEl = document.getElementById('error-message');
  var listBlockEl = document.getElementById('list-block');
  var addItemBtnEl = document.getElementById('toggle-btn');
  var enterNameEl = document.getElementById('user-name');
  var listEL = document.getElementById('list-elm');
  var actionBlockEL = document.getElementById('action-block');
  var checkAllBtnEL = document.getElementById('check-all');
  var deleteAllBtnEL = document.getElementById('delete-all'); //------------------------------------------------------------------------------------------

  listEL.classList.add('name-box-list');

  var onAddElemItem = function onAddElemItem() {
    var val = document.getElementById('user-name').value;
    var newListEL = document.createElement('li'); // span element

    var spanEL = document.createElement('span');
    spanEL.innerHTML = val; // checkbox element

    var newChekEL = document.createElement('input');
    newChekEL.type = 'checkbox';
    newChekEL.classList.add('checkbox'); // button element

    var newButEL = document.createElement('button');
    newButEL.innerHTML = 'Delete';
    newButEL.classList.add('delete');
    newChekEL.classList.add('chek-marker');
    newButEL.classList.add('delet-btn');

    if (!val.trim()) {
      alert("Error no name entered!");
      return;
    }

    if (listEL.childElementCount === 0) {
      actionBlockEL.classList.remove('hidden');
    }

    newListEL.append(newChekEL, spanEL, newButEL);
    listEL.append(newListEL);
    enterNameEl.value = '';
  };

  var onDeletItem = function onDeletItem(el) {
    if (el.target.classList.contains('delet-btn')) {
      el.target.parentElement.remove();

      if (listEL.childElementCount === 0) {
        actionBlockEL.classList.add('hidden');
      }
    }
  };

  var onCheckItem = function onCheckItem(el) {
    if (el.target.classList.contains('chek-marker')) el.target.parentElement.classList.toggle('checked');
  };

  var onDeletElemAll = function onDeletElemAll() {
    Array.from(listEL.children).forEach(function (el) {
      return el.remove();
    });
    actionBlockEL.classList.add('hidden');
  };

  var onCheckElemAll = function onCheckElemAll() {
    Array.from(listEL.children).forEach(function (el) {
      el.classList.add('checked');
      el.children[0].checked = true;
    });
  }; //---------------------------------login-form------------------------------------------------


  var user = {
    login: 'admin@gmail.com',
    parol: '123'
  };

  var entryDataUser = function entryDataUser() {
    var valEmailInput = document.getElementById('email').value;
    var valPasswordInput = document.getElementById('password').value;

    if (valEmailInput != user.login || valPasswordInput != user.parol) {
      spanEl.innerHTML = 'You entered incorrect data!';
      emailinputEl.classList.toggle('error-message');
      passwordInputEl.classList.toggle('error-message');
      emailinputEl.value = '';
      passwordInputEl.value = '';
      loginBtnEl.disabled = true;
    } else {
      loginFormEl.classList.toggle('hidden');
      listBlockEl.classList.remove('hidden');
    }
  };

  emailinputEl.onblur = function () {
    if (!emailinputEl.value.includes('@')) {
      emailinputEl.classList.add('invalid');
      spanEl.innerHTML = 'Please, enter correct email!';
    }
  };

  emailinputEl.onfocus = function () {
    emailinputEl.value = '';
    emailinputEl.classList.remove('error-message');
    spanEl.innerHTML = '';

    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
    }
  };

  passwordInputEl.onfocus = function () {
    passwordInputEl.classList.remove('error-message');
    spanEl.innerHTML = '';
  };

  addItemBtnEl.addEventListener('click', onAddElemItem);
  enterNameEl.addEventListener('keydown', function (el) {
    if (el.code === 'Enter') onAddElemItem();
  });
  deleteAllBtnEL.addEventListener('click', onDeletElemAll);
  checkAllBtnEL.addEventListener('click', onCheckElemAll);
  listEL.addEventListener('click', onDeletItem);
  listEL.addEventListener('change', onCheckItem);
  loginBtnEl.addEventListener('click', entryDataUser);
})();
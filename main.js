
(() => {
    const loginFormEl = document.getElementById('login-form');
    const emailinputEl = document.getElementById('email');
    const passwordInputEl = document.getElementById('password');
    const loginBtnEl = document.getElementById('button-login');
    const spanEl = document.getElementById('error-message');

    const listBlockEl = document.getElementById('list-block');
    const addItemBtnEl = document.getElementById('toggle-btn');
    const enterNameEl = document.getElementById('user-name');
    const listEL = document.getElementById('list-elm');

    const actionBlockEL = document.getElementById('action-block');
    const checkAllBtnEL = document.getElementById('check-all');
    const deleteAllBtnEL = document.getElementById('delete-all');


    //------------------------------------------------------------------------------------------

    listEL.classList.add('name-box-list');

    const onAddElemItem = () => {
        let val = document.getElementById('user-name').value;
        const newListEL = document.createElement('li');

        // span element
        const spanEL = document.createElement('span');
        spanEL.innerHTML = val;

        // checkbox element
        const newChekEL = document.createElement('input');
        newChekEL.type = 'checkbox';
        newChekEL.classList.add('checkbox');

        // button element
        const newButEL = document.createElement('button');
        newButEL.innerHTML = 'Delete';
        newButEL.classList.add('delete');

        newChekEL.classList.add('chek-marker');
        newButEL.classList.add('delet-btn');

        if (!val.trim()) {
            alert(`Error no name entered!`);
            return;
        }

        if (listEL.childElementCount === 0) {
            actionBlockEL.classList.remove('hidden');
        }
        newListEL.append(newChekEL, spanEL, newButEL);
        listEL.append(newListEL);
        enterNameEl.value = '';

    }

    const onDeletItem = el => {
        if (el.target.classList.contains('delet-btn')) {
            el.target.parentElement.remove();
            if (listEL.childElementCount === 0) {
                actionBlockEL.classList.add('hidden');
            }
        }
    };

    const onCheckItem = el => {
        if (el.target.classList.contains('chek-marker'))
            el.target.parentElement.classList.toggle('checked');
    };

    const onDeletElemAll = () => {
        Array.from(listEL.children).forEach(el => el.remove());
        actionBlockEL.classList.add('hidden');
    };

    const onCheckElemAll = () => {
        Array.from(listEL.children).forEach(el => {
            el.classList.add('checked');
            el.children[0].checked = true;
        });
    };


//---------------------------------login-form------------------------------------------------

    const user = {
        login: 'admin@gmail.com',
        parol: '123'
    };


    const entryDataUser = () => {
        let valEmailInput = document.getElementById('email').value;
        let valPasswordInput = document.getElementById('password').value;

        if ((valEmailInput != user.login) || (valPasswordInput != user.parol)) {
            spanEl.innerHTML = 'You entered incorrect data!';
            emailinputEl.classList.toggle('error-message');
            passwordInputEl.classList.toggle('error-message');

            emailinputEl.value = '';
            passwordInputEl.value = '';
            loginBtnEl.disabled = true;
        }

        else {
            loginFormEl.classList.toggle('hidden');
            listBlockEl.classList.remove('hidden');
        }
    }

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
    enterNameEl.addEventListener('keydown', el => {
        if (el.code === 'Enter') onAddElemItem();
    });

    deleteAllBtnEL.addEventListener('click', onDeletElemAll);
    checkAllBtnEL.addEventListener('click', onCheckElemAll);
    listEL.addEventListener('click', onDeletItem);
    listEL.addEventListener('change', onCheckItem);
    loginBtnEl.addEventListener('click', entryDataUser);

})();





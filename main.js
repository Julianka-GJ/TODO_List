const btnClickEl = document.getElementById('toggle-btn');
const enterNameEl = document.getElementById('user-name');
const listEL = document.getElementById('list-elm');

listEL.classList.add('name-box-list');



btnClickEl.onclick = () => {
    let val = document.getElementById('user-name').value;
    const newListEL = document.createElement('li');

    if (enterNameEl.value === '') {
        alert(`Error no name entered!`);
    }
    else {
        newListEL.innerHTML = val;
        listEL.append(newListEL);
        enterNameEl.value = '';
    }
};
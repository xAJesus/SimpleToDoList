const button = document.getElementById('add');
const input = document.getElementById('user-input');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    // creates button
    const delBTN = document.createElement('BUTTON');
    delBTN.innerText = 'Remove';
    //creates list item
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
    li.appendChild(delBTN);
    // below adds an eventlistenter to the new li item
    delBTN.addEventListener('click', function () {
        li.classList.add('hide');
    });
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.code === 'Enter') {
        createListElement();
    }
}

// Creates a button for each li item that is defaulted on page already and adds functionality of removeing li item if chosen
for (let i = 0; i < li.length; i++) {
    const delBTN = document.createElement('BUTTON');
    delBTN.innerText = 'Remove';
    li[i].appendChild(delBTN);
    delBTN.addEventListener('click', function () {
        li[i].classList.add('hide');
    });
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

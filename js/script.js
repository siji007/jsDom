const listDiv = document.querySelector('.list');

const descriptionH3 = document.querySelector('h3.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description');
const listItems = document.getElementsByTagName('li');
const toogleList = document.querySelector('.toogleList');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toogleList.addEventListener('click', () => {

    if (listDiv.style.display === 'block') {
        toogleList.style.textContent === 'Hide List';
    } else {
        listDiv.style.display === 'none';
        toogleList.style.display === 'Show List';
    }
});

descriptionButton.addEventListener('click', () => {

    descriptionH3.innerHTML = descriptionInput.value + ":";
    descriptionH3.value = '';
});

addItemButton.addEventListener('click', () => {


    const ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {

    const ul = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    li.textContent = addItemInput.value;
    ul.removeChild(li);

});


descriptionInput.title = "Another One";
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();

    });
    listItems[i].addEventListener('mouseleave', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });

}
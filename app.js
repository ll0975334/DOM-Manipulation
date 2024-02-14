document.getElementById('item-input');
document.getElementById('items-list');
document.getElementById('add-item').addEventListener("click", function() {
    const itemText = inputfield.value.trim(); //gets the value entered in the text box
    itemText.style = 'font-variant:small-caps';
    listItem.classList.add('list-item'); // Add a class for identification
    itemsList.appendChild(itemText);
});

itemsList.addEventListener('click', function(e) {
    if (e.target && e.target.matches('.list-item')) {
    // Remove the clicked item
    e.target.remove();
    }
    else {
    e.target.style.textTransform = 'uppercase';
    e.target.style.color = 'red';    
    }
});
function get(element) {
    return document.getElementById(element);
}

var ul = get('list');
var add = get('add');
var removeAll = get('removeAll');

add.onclick = function() {
    addLi(ul);
};

function addLi(targetUl) {
    var inputText = get('text').value;
    var textNode = document.createTextNode(inputText);
    var li = document.createElement('li');
    var removeButton = document.createElement("span");
    var removeButtonName = document.createTextNode("\u00D7");

    get('text').value = '';

    if (inputText.split(' ').join('').length === 0) {
        console.log('No data input');
        return false;
    }

    removeButton.className = 'delButton';
    removeButton.appendChild(removeButtonName);
    removeButton.setAttribute('onclick', 'removeMe(this);');

    li.appendChild(textNode);
    li.appendChild(removeButton);

    targetUl.appendChild(li);
}

ul.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);

function removeMe(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

removeAll.onclick = function() {
    ul.innerHTML = '';
};
let items = [];

function populate(){
    const itemlist = document.querySelector('.itemlist');
    itemlist.innerHTML = "";
    items.forEach(item => {
        const entry = document.createElement('div');
        entry.textContent = item.name + " : " + item.quantity;
        itemlist.appendChild(entry);
    });
}

function save(){
    let exists = false;
    let inputName = document.getElementById('item').value;
    let inputQuantity = document.getElementById('quantity').value;
    if(inputQuantity <= 0){
        alert("quantity cannot be <= zero");
        return;
    }
    items.forEach(item => {
        if(item.name == inputName){
            alert("item already added");
            exists = true;
            return;
        }
    });
    if(exists == true){
        return;
    }
    const item = {name:inputName, quantity:inputQuantity};
    items.push(item);
    populate();
}

function update(){
    let inputName = document.getElementById('item').value;
    let inputQuantity = document.getElementById('quantity').value;
    if(inputQuantity <= 0){
        alert("quantity cannot be <= zero");
        return;
    }
    items.forEach(item => {
        if(item.name == inputName){
            item.quantity = inputQuantity;
        }
    });
    populate();
}

function remove(){
    let inputName = document.getElementById('item').value;
    items.forEach(item => {
        if(item.name == inputName){
            items.splice(items.indexOf(item), 1);
        }
    });
    populate();
}

function clearitems(){
    const itemlist = document.querySelector('.itemlist');
    itemlist.innerHTML = "";
    items.length = 0;
}
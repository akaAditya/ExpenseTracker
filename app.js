
function getExpense(){
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let items = document.getElementById('list').value;

    let obj = {
        amount,
        description,
        items
    }
    let objStr = JSON.stringify(obj);
    localStorage.setItem(obj.items, objStr);

    expenses(obj);
}
function expenses(obj){

    let parentElem = document.getElementById("expense-list");
    let childElem = document.createElement("li");
    childElem.textContent = obj.amount + ' - ' + obj.description + ' - ' + obj.items;

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.items);
        parentElem.removeChild(childElem);
    }
    const editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit';
    editButton.onclick = () =>{
        
        localStorage.removeItem(obj.items);
        parentElem.removeChild(childElem);
        document.getElementById('amount').value = obj.amount;
        document.getElementById('description').value = obj.description;
        document.getElementById('list').value = obj.items;

    }
        
    childElem.appendChild(deleteBtn);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
}
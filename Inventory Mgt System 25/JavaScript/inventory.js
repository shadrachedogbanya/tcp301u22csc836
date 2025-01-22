document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! Please log in.');
    document.getElementById('registerForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        document.getElementById('authSection').style.display = 'none';
        document.getElementById('inventorySection').style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }

    document.getElementById('loginForm').reset();
});

document.getElementById('inventoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    addItemToInventory(itemName, itemQuantity);

    document.getElementById('inventoryForm').reset();
});

function addItemToInventory(name, quantity) {
    const table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const quantityCell = newRow.insertCell(1);
    const actionsCell = newRow.insertCell(2);

    nameCell.textContent = name;
    quantityCell.textContent = quantity;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });

    actionsCell.appendChild(deleteButton);
}

async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8002/users');
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        /*Converts the response body to JSON format and waits for the conversion to complete. The 
        resulting JavaScript object is stored in users.
        If the server returns [ { _id: '1', username: 'Alice', email: 'alice@example.com', phone: 
        '1234567890' } ], users will be this array.*/
        const users = await response.json();
        console.log('Fetched users:', users);
        
        const tableBody = document.getElementById('userTableBody');
        tableBody.innerHTML = '';

        users.forEach(user => {
        
            const row = document.createElement('tr');
            row.innerHTML = `
                  <td>${user._id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

async function generateData() {
    try {
        const response = await fetch('http://localhost:8002/populate', {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error('Failed to generate data');
        }
        // Calls fetchUsers to update the user data in the table after generating new data
        await fetchUsers();
    } catch (error) {
        console.error('Error generating data:', error);
    }
}
//Adds a click event listener to the element with ID generateButton. When clicked, it calls the generateData function.
document.getElementById('generateButton').addEventListener('click', generateData);



async function deleteAllUsers() {
    try {
        const response = await fetch('http://localhost:8002/deleteAll', {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete users');
        }
        // Refresh the user data in the table after deletion
        await fetchUsers();
    } catch (error) {
        console.error('Error deleting users:', error);
    }
}

// Add event listener for the delete button
document.getElementById('DeleteButton').addEventListener('click', deleteAllUsers);










fetchUsers();

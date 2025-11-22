const addUserForm = document.getElementById('addUserForm');
const getUsersBtn = document.getElementById('getUsersBtn');
const userList = document.getElementById('userList');

addUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    try {
        const response = await fetch('http://localhost:9000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        });
        const newUser = await response.json();
        alert(`User added: ${newUser.username}`);
        e.target.reset();
    } catch (error) {
        console.error('Error adding user:', error);
        alert('Error adding user');
    }
});

getUsersBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:9000/users');
        const users = await response.json();
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.username;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        alert('Error fetching users');
    }
});

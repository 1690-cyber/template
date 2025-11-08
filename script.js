let users = [];

function ubahTeks(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nik = document.getElementById("nik").value;

    if(name && email && password) {
        users.push({name, email, password, nik});
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        document.getElementById("nik").value = '';
        displayData();
    } else {
        alert("Harap isi semua data");
    }
}
function displayData(){
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    users.forEach((user, index) => {
        tableBody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.nik}</td>
        <td>
        <button onclick="editData(${index})">Edit</button>
        <button onclick="deleteData(${index})">Hapus</button>
        </td>
        </tr>
        `;
    });
}
function editData(index) {
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("password").value = user.password;
    document.getElementById("nik").value = user.nik;
    deleteData(index);
}
function deleteData(index) {
    users.splice(index, 1);
    displayData();
}
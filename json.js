function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))

}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))

}
function displayUser(data) {
    const ul = document.getElementById('users');
    console.log(data);

    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `user name: ${user.name} user name: ${user.username} email: ${user.email}`
        ul.appendChild(li);
    }
}
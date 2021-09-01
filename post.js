function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => displayPost(json))
}
loadPost();
function displayPost(post) {
    const postContainer = document.getElementById('post');
    for (const posts of post) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = ` 
        <h3>${posts.title}</h3>
        <p>${posts.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(posts);
    }
}
function addApost() {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'post';
        }
    )
}
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))

}
const displayBuddies = data => {
    const buddy = data.results;
    console.log(data)
    const buddyContainer = document.getElementById('buddies');

    for (const buddies of buddy) {
        console.log(buddies);
        const p = document.createElement('p');
        p.innerText = ` name:${buddies.name.first} ${buddies.name.last} email:${buddies.email}`;
        buddyContainer.appendChild(p);
    }

}
loadBuddies();
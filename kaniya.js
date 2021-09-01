const loadQutes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data));
}
const displayQoute = qoute => {
    console.log(qoute);
    const qouteElement = document.getElementById('qoute');
    qouteElement.innerText = qoute.quote;

}
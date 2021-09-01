const loadCountires = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountires(data));
}
loadCountires();

const displayCountires = count => {
    // for (const counts of count) {
    //     console.log(counts);
    // }
    const countryDiv = document.getElementById('countries');
    count.forEach(counties => {
        // console.log(counties);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML =
            ` <h3>${counties.name}</h3>
            <p>${counties.capital}</p>
            <button onclick="loadcountryByName('${counties.name}')"s>show Details</button>`
        // const h3 = document.createElement('h3');
        // h3.innerText = counties.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = counties.capital;
        // div.appendChild(p);
        countryDiv.appendChild(div);

    })

}
const loadcountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detals');
    countryDetail.innerHTML =
        `
    <h4>${country.name}</h4>
    <p>population is:${country.population}</p>
    <img src = "${country.flag}"width = "200px">
    `

}
const searchButton = document.getElementById("search-btn"),
searchInput = document.getElementById("country-inp"),
resultText = document.getElementById("result");


searchButton.addEventListener("click", () => {
    
    let countryName = searchInput.value

    if (!countryName) {
        return resultText.innerHTML = "<h3>The input field cannot be empty</h3>"
    }

    let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`

    resultText.innerHTML = `<div class="spinner"></div>`

    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].capital[0]) 
        console.log(data[0].flags.svg)
        console.log(data[0].name.common)
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(" "));

        resultText.innerHTML = `
        
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>

        `

    })
    .catch(() => {
        resultText.innerHTML = "<h3>Please enter a valid country name.</h3>"
    })

    
})





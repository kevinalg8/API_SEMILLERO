// se define dos variables donde se guardan los elemento llamado por id
let searchBtn = document.getElementById('search-btn'),
    countryInp = document.getElementById('country-inp');

  searchBtn.addEventListener('click', ()=>{
    let countryName = countryInp.value,
        finalURL =`https://restcountries.com/v2/name/${countryName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL)
    .then(response => response.json())
    .then((data)=>{
        // let mostrar = console.log(`pais: ${data[0].nativeName}`)
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continets[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));

    }).catch((error) => console.error("Paila"))

  });
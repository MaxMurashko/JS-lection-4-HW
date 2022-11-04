console.table(countries);

var htmlString = "";

for(country of countries) {
    htmlString += `<tr">
        <td>${country.name.official}</td>
        <td>${country.region}</td>
        <td>${country.population}</td>
        <td class="text-center"><img width="70" src=${country.flags.png} alt="flag img"></td>
    </tr>`;
}


document.getElementById("countries").innerHTML = htmlString;

//var i = 0; i < countries.length; i++
//var i in countries var country = countries[i]
//var country of countries
//class="${+i % 2 ? "" : "bg-secondary"}"
//Creation Date: 29Jul2021
//===========================================================
//Get asian countries data using filter
//Get countries with population less than 2 lakhs using filter
//Get the countries those have USD as one of their currency
//Get the population of all countries using reduce

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    // console.log(data);
    var asian = data.filter((element) => (element.region === "Asia"))
    console.log(asian)

    var pop_2lakh = data.filter((element) => (element.population < 200000))
    console.log(pop_2lakh)

    var curr_usd = data.filter((element) => {
        for (let i in element.currencies) {
            if (element.currencies[i].code === "USD") {
                return true
            }
        }
    }
    )
    console.log(curr_usd)

    var tot_pop = data.reduce((acc, ele) => acc + ele.population, 0)
    console.log(tot_pop)


}


let cities = [];
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(function(res){
    return res.json();
})
.then(function (data){
    cities = data;
})
console.log(cities);

const suggest = document.getElementById('suggest');
function findMatch(e){
    let v = e.target.value;
    console.log('1');
    if (!v) {
        return;
    }
    let suggestCity = cities.filter(function(city){
        if (city.city.includes(v)||city.state.includes(v)) {
            return true;
        }
        return false;
    })
    const ul = document.querySelector('ul');
    ul.innerHTML = suggestCity.map(function(){
        let cityName = city.city;
        let stateName = city.state;
        return `
        <li>${cityName}-${stateName}</li>
        `.replace(`${v}`,`<span class="highlight">${v}</span>`);
    })
}
suggest.addEventListener('keyup',findMatch);
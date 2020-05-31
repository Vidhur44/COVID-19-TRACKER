var api= "https://api.covid19api.com/summary"

window.onload = function global(){

init()

}

  function init(){

    fetch(api)
    .then( Global => {
return Global.json();
           }
    ).then(display)
          

  function display(Global){

    console.log(Global);

    var ele = document.getElementById('sel');
    for (var i = 0; i < Global.Countries.length; i++) {
  
        ele.innerHTML = ele.innerHTML +
            '<option value="' + Global.Countries[i]['Country'] + '" id="opt">' + Global.Countries[i]['Country'] + '</option>';
    }

    let country = document.querySelector('.card .country');
    country.innerHTML = `GLOBAL`;

    let total = document.querySelector('.card .total');
total.innerHTML = `Confirmed : ${(Global.Global.TotalConfirmed)}`;

let deaths = document.querySelector('.card .deaths');
deaths.innerHTML = `Deaths : ${(Global.Global.TotalDeaths)}`;

let recov = document.querySelector('.card .recovered');
recov.innerHTML = `Recovered : ${(Global.Global.TotalRecovered)}`;
    
  }

  
  }


function getResults() {
  
const searchBox= document.getElementById('sel').value;

fetch(api)

    .then(covid => {
      
             return covid.json();

    }).then(displayRes);

function displayRes(covid){

  for (var i=0; i<covid.Countries.length; i++){

      if ((searchBox == covid.Countries[i].Country) || (searchBox == covid.Countries[i].Slug)){
        
        document.querySelector('.card .country').innerHTML = covid.Countries[i].Country;
        document.querySelector('.card .total').innerHTML = `Confirmed : ${(covid.Countries[i].TotalConfirmed)}`;
        document.querySelector('.card .deaths').innerHTML = `Deaths : ${(covid.Countries[i].TotalDeaths)}`;
        document.querySelector('.card .recovered').innerHTML = `Recovered : ${(covid.Countries[i].TotalRecovered)}`;
        break;
      }  
  }
}
}



var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
// var body = document.querySelector('body');


async function changeWeatherUI(capitalSearch) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=0f6d65bde7aa795a95c149d12825f833`;
    
    let data = await fetch(apiUrl).then(response => response.json())
    if(data.cod == 200) {
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        let temp = data.main.temp;
        value.innerText = temp;
        console.log(temp);
        shortDesc.innerText = data.weather[0].main;
        time.innerText = new Date().toLocaleString('vi');
        document.body.className = 'hot';
        if(temp < 16){
            document.body.className = 'cold';
        }else if(temp > 16 && temp < 22){
            document.body.className = 'cool';
        }else if(temp > 22 && temp < 26){
            document.body.className = 'warm';
        }else if(temp > 26 && temp <50){
            document.body.className = 'hot';
        }

    }else{
        content.classList.add('hide');
    }
}

search.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch);
    }
});

changeWeatherUI('Ha noi');
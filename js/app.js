
const form_ui = document.querySelector('.btn-danger')
form_ui.addEventListener('click', (e)=>{
    const search_value = document.querySelector('.search_value').value
    const API_KEY = '886f623ee323631a27fb74ec31ea7c8d'
    // const URL = 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_value}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
})


function displayData(data){
    const lead = document.querySelector('.lead')
    const tem = document.querySelector('#tem')
    const city_name = document.querySelector('#city_name')
    const icons_image = document.querySelector('.icons_image')
    tem.innerHTML = data.main.temp
    city_name.innerHTML = data.name
    lead.innerHTML = data.weather[0].description
    console.log(data)
    icons_image.src = `http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png`

}


const searchWeather = async () => {
    const cityName = document.getElementById("city-name").value;
    const api = '850a80acf90ccc0836e30cbd64c8e5fc';
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`);
        const data = await res.json();
        updateWeather(data);
    }
    catch (error) {
        errorHandler("Search Not Found");
    }
}
const updateWeather = updateData => {

    const cityName = updateData.name;
    const currentTemp = Math.floor((updateData.main.temp - 273.15));
    const condition = updateData.weather[0].main;
    const countryName = updateData.sys.country;
    const icon = updateData.weather[0].icon;

    const showUpdate = document.getElementById("show-update");
    showUpdate.innerHTML = '';
    const innerContent = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">
    <h1>${cityName}.${countryName}</h1>
    <h3><span>${currentTemp}</span>&deg;C</h3>
    <h1 class="lead">${condition}</h1>`;
    showUpdate.innerHTML = innerContent;
}
const errorHandler = (error) => {
    alert(error);
}
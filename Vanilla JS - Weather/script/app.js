const form = document.querySelector("form");
const detay = document.querySelector('.detay');
const kart = document.querySelector('.card');

const timePic= document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI=(data)=>{
    const weatherX = data.weather;
    const cityDetail =data.cityDetails;

    detay.innerHTML=`
            <div class="text-muted text-uppercase text-center detay">
            <h5 class="my-3">${cityDetail.LocalizedName}</h5>
                    <div class="my-3">${weatherX.WeatherText}</div>
                    <div class="display-4 my-4">
                    <span>${weatherX.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                    </div>
            </div>
    
    `;

    const iconSrc = `img/icons/${weatherX.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weatherX.IsDayTime ? timeSrc = 'img/day.svg' : 'img/night.svg';

    timePic.setAttribute('src',timeSrc);


    if(kart.classList.contains('d-none')){
        kart.classList.remove('d-none');
    }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = form.city.value.trim();

  cityUpdate(city)
  .then((data) => {
    updateUI(data);
  });
  form.reset();

  localStorage.setItem('city', city)
});

const cityUpdate = async (city) => {
  const cityDetails = await fetchCity(city);
  const weather = await fetchWeatherData(cityDetails.Key);

  return {
    cityDetails,
    weather,
  };
};

if(localStorage.getItem('city')){
    cityUpdate(localStorage.getItem('city'))
    .then((data) => {
      updateUI(data);
    });
}
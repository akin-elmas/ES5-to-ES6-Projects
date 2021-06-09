const key = "0KFAVHYkGyjSf88NUBnQRDxF1bpNvqAb";

const fetchWeatherData= async(id)=>{
    const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query =`${id}?apikey=${key}`;

    const res= await fetch(baseURL+ query)
    const data = await res.json();

    return data[0];
}


const fetchCity = async (location) => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const query = `?apikey=${key}&q=${location}`;

  const res = await fetch(baseURL + query);
  const data = await res.json();

  return data[0];
};
/* fetchWeatherData('316649').then(data=>{
    console.log(data);
}) */
fetchCity("hongkong")
  .then((data) => {
    return fetchWeatherData(data.Key);
  })
  .then(data => console.log(data))
  .catch((data) => {
    console.log(err);
  });

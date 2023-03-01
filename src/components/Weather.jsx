import { useContext } from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";
import MyContext from "../context/MyContext";
import dateFormatter from "../helpers/dateformatter";
import {Country} from 'country-state-city'
const Weather = () => {
  const context = useContext(MyContext);
  const { data, countrySelect, stateSelect, citySelect } = context;
  let sunrise;
  let sunset;
  if (data.loading) return <p>Loading.....</p>;
  if (data.error) return <p>{data.error}</p>;
  if (!data.results.main)
    return (
      <section className="no-data">
        <h1>No data returned for this city</h1>
      </section>
    );
  if (data.results.main) {
    sunrise = dateFormatter(data.results.sys.sunrise);
    sunset = dateFormatter(data.results.sys.sunset);
  }
 console.log(countrySelect.flag);
  return (
    <section className="details-container">
      <section className="main-details">
        <h2 className="description">{data.results.weather[0].description}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${data.results.weather[0].icon}.png`}
          alt=""
        />
        <h2 className="country">{countrySelect.country}</h2>
        <h2 className="state">{stateSelect.state}</h2>
        <h2 className="city">{citySelect}</h2>
        <span className="flag"> <img src={`https://flagcdn.com/16x12/${countrySelect.flag.toLowerCase()}.png
`} alt="" /></span>
      </section>
      <section className="temperatures">
        <aside className="first-column">
          <h3>Temperature:</h3>
          <h3>Feels like:</h3>
          <h3>Temp Min:</h3>
          <h3>Temp Max:</h3>
        </aside>
        <aside className="second-column">
          <span className="weather-details">{data.results.main.temp}°C</span>
          <span className="weather-details">
            {data.results.main.feels_like}°C
          </span>
          <span className="weather-details">
            {data.results.main.temp_min}°C
          </span>
          <span className="weather-details">
            {data.results.main.temp_max}°C
          </span>
        </aside>
      </section>
      <section className="other">
        <aside className="first-column">
          <h3>Pressure:</h3>
          <h3>Humidity:</h3>
          <h3>Wind Speed:</h3>
        </aside>
        <aside className="second-column">
          <span className="weather-details">
            {data.results.main.pressure} Bars
          </span>
          <span className="weather-details">{data.results.main.humidity}%</span>
          <span className="weather-details">
            {data.results.wind.speed}meters/sec
          </span>
          <span>{Country.getAllCountries()[0].flag}</span>
        </aside>
      </section>
      <aside className="suns">
        <WiSunrise className="sunrise" />
        <span className="sun-details">
          {sunrise.date}, {sunrise.time}
        </span>
        <WiSunset className="sunset" />
        <span className="sun-details">
          {sunset.date}, {sunset.time}
        </span>
      </aside>
    </section>
  );
};
export default Weather;

export default class apixuService {

  apiKey = "3496053e3cee4092be794104182510";

  options = {
    host: "api.apixu.com",
    port: 80,
    path: "/v1/current.json?key=" + this.apiKey + "&q=",
    method: "GET"
  };

  getWeather = async query => {
    const res = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${query}`);

    if (!res.ok) {
      throw new Error(`Error with the request ${res.status}`);
    }

    return await res.json();
  };

  getCurrentWeather = async city => {
    const res = await this.getWeather(city);
    return this.transformCurrentWeather(res);
  };

  transformCurrentWeather = res => {
    return {
      nameCity: res.location.name,
      country: res.location.country,
      currentTemp: res.current.temp_c,
      iconCurrentTemp: res.current.condition.icon,
      textCurrentTemp: res.current.condition.text
    };
  };
}

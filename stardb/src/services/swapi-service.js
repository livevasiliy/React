export default class SwapiService {
  __apiBase = "https://swapi.co/api";

    /***
     * Базовая функция
     * @param url
     * @returns {Promise<any>}
     */
  async getResource(url) {
    const res = await fetch(`${this.__apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} recieved ${res.status}`);
    }
    return await res.json();
  }

  /***
   * Получить список все персонажей
   * @returns {Promise<string>}
   */
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this.__transformPerson);
  }

  /***
   * Получить информацию о персонаже
   * @param id
   * @returns {Promise<*>}
   */
  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this.__transformPerson(person);
  }

  /***
   * Получить список всех планет
   * @returns {Promise<string>}
   */
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this.__transformPlanet);
  }

  /***
   * Получить информацию о планете
   * @param id
   * @returns {Promise<*>}
   */
  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this.__transformPlanet(planet);
  }

  /***
   * Получить список всех звёздных кораблей
   * @returns {Promise<string>}
   */
  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this.__transformStarship);
  }

  /***
   * Получить информацию о звёздном корабле
   * @param id
   * @returns {Promise<*>}
   */
  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this.__transformStarship(starship);
  }

    /***
     * Извлекает ID из URL
     * @param item
     * @returns {*|string}
     * @private
     */
  __extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

    /***
     * Переводит полученные данные о планете в удобный формат
     * @param planet
     * @returns {{id: (*|string), name: *, population: null, rotationPeriod: *, diameter: null}}
     * @private
     */
  __transformPlanet = (planet) => {
    return {
      id: this.__extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

    /***
     * Переводит полученные данные о персонаже в удобный формат
     * @param person
     * @returns {{id: (*|string), name: *, gender: *, birthYear: *, eyeColor: *}}
     * @private
     */
  __transformPerson = (person) => {
    return {
      id: this.__extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  }

    /***
     * Переводит полученные данные о звёздном корабле в удобный формат
     * @param starship
     * @returns {{id: (*|string), name: *, model: *, manufacturer: *, costInCredits: *, length: *, crew: *, passengers: *, cargoCapacity: *}}
     * @private
     */
  __transformStarship = (starship) => {
    return {
      id: this.__extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }
}
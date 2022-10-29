const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters';
const API_KEY = '5d36cf114a021ff54acc99c3685cf90f';

class MarwelServices {
  getResource = async url => {
    let result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not find fetch ${url}, status ${result.status}`);
    }
    return await result.json();
  };

  getAllMarwels = async () => {
    const r = await this.getResource(`${BASE_URL}?apikey=${API_KEY}`);
    return r.data.results.map(this._transformChar);
  };

  getMarwelById = async id => {
    const r = await this.getResource(`${BASE_URL}/${id}?apikey=${API_KEY}`);
    return this._transformChar(r.data.results[0]);
  };

  _transformChar = char => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  };
}

export default MarwelServices;

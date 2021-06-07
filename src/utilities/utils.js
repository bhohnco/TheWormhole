import countries from './countries';

const utils = {
  getRandomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
  },

 formatLocationStr(country) {
    const lowercaseName = country.toLowerCase();
    const formattedString = lowercaseName.replaceAll(' ', '+');

    return formattedString;
  },

  formatCountryName(country) {
    const [ name, prefix ] = country.split(',');
    if (prefix === undefined) {
      return name;
    } else {
      return prefix + ' ' + name;
    }
  },

  getRandomLocation() {
    const randomCountry= utils.getRandomElement(countries)
  
    return randomCountry;
  },

  lockScroll() {
    document.body.classList.toggle('lock-scroll');
  },

  checkForErr(response) {
      if(response.status >= 500) {
        return '500: Uhoh, the angry computer gnome just drop kicked one of our servers. This page is temporarily unavailable.'
      } else if(response.status === 404) {
        return '404: oh no! Nothing in here. We cannot seem to find the page you are looking for.'
      } else if (!response.ok) {
        return 'Something small went wrong. Please try again later.'
      } else {
        return response.json()
      }
  },
}

export default utils;
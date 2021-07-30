import countries from '../assets/datasets/countries';

const utils = {
  getRandomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
  },

  formatLocationStr(country) {
    if (country) {
      const lowercaseName = country.toLowerCase();
      const formattedString = lowercaseName.replaceAll(' ', '+');
 
      return formattedString;
    } else {
      return;
    }
  },

  formatCountryName(country) {
    const [ name, prefix ] = country.split(',');
    if (prefix === undefined) {
      return name;
    } else {
      return prefix + ' ' + name;
    }
  },

  removeLinkInBio(artistInfo) {
    if (artistInfo.bio) {
      const text = artistInfo.bio.content;
      const [ body, link] = text.split('<a');
      const [ , rights] = link.split('</a>. ');
      const joinedText = body + '\n\n' + rights;
      return joinedText;
    } else {
      return 'No artist information available.';
    }
  },

  getRandomLocation() {
    const randomCountry = utils.getRandomElement(countries)
  
    return randomCountry;
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
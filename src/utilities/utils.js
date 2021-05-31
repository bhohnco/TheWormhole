const utils = {
  getRandomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
  },

 formatLocationStr(country) {
    const lowercaseName = country.toLowerCase();
    const formattedName = lowercaseName.replaceAll(' ', '+');

    return formattedName;
  },

  formatCountryName(country) {
    const lowercaseName = country.toLowerCase();
    const formattedName = lowercaseName.replaceAll(' ', '+');

    return formattedName;
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
  }
}

export default utils;
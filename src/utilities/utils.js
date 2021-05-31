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
}

export default utils;
// MusicBrainz API data fetching code

// will use if we ever figure out how to "web crawl" to artist image 
// in HTML of URL returned in fetched data

// const [artistImages, setArtistImages] = useState([]);

// const fetchArtistImage = async (id) => {
  //   const imageObj = await apiCalls.getArtistImagePage(id);
  //   const pageURL = await locateImagePageURL(imageObj);
  //   artistImages.push(pageURL || undefined);
  // }

// const locateImagePageURL = (imageObj) => {
//   const imageKeys = Object.keys(imageObj.relations);
//   let imageURL = '';

//   imageKeys.forEach(key => {
//     if (imageObj.relations[key].type === 'image') {
//       imageURL = imageObj.relations[key].url.resource;
//     }
//   });

//   return imageURL;
// }


  // const filterArtists = (data) => {
  //   const topArtists = data.reduce((topTen, artistObj) => {
  //     if (data.indexOf(artistObj) < 12) {
  //       fetchArtistImage(artistObj.mbid);
  //       topTen.push(artistObj);
  //     }
  //     return topTen;
  //   }, []);
  //   return topArtists;
  // }

//   const buildCards = (topArtists) => topArtists.map(artist => {

//   let nameString = artist.name.replaceAll(' ', '+');
//   let imgURL = artistImages[topArtists.indexOf(artist)];

//   return (
//     <article id={artist.mbid} key={artist.mbid} className='top-artist-card'>
//       <p>{artist.name}</p>
//       <Link to={`/artist:${nameString}`} id={nameString} className='link-container'>
//         <img alt='artist-portrait'></img>
//       </Link>
//     </article>
//   )
// });


  // async getArtistImageURL() {
  //   const response = await fetch(`http://commons.wikimedia.org/wiki/File:ArianaGrandeDecember2013.jpg`)
  //   const data = await response.json();
  //   console.log(data);
  // }
//}

const axios = require('axios');

const apiKey = '';
const locations = ['Puerto Iguazú, Argentina'];
const categories = ['Cabañas y alojamientos'];

async function getBusinessInfo() {
  debugger;
  for (const location of locations) {
    for (const category of categories) {
      const searchQuery = `${category} in ${location}`;
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`;
      try {
        const response = await axios.get(url);
        const businesses = response.data.results;
        console.log(`➡️ Consulta: ${searchQuery}`);
        console.log(response.data); //
        businesses.forEach((business) => {
          if (!business.website) {  // Solo muestra los que NO tienen sitio web
            console.log(`Business Name: ${business.name}`);
            console.log(`Address: ${business.formatted_address}`);
            console.log('No website available');
            console.log('--------------------------------------');
          }
        });
      } catch (error) {
        console.error(`Error fetching data for ${category} in ${location}:`, error);
      }
    }
  }
}

getBusinessInfo();
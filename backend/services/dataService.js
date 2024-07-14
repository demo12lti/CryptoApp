const axios = require('axios');
const Price = require('../model/price');

const fetchData = async () => {
  try {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,cardano,solana&vs_currencies=usd');
    const coins = Object.keys(data);
    const prices = coins.map(coin => ({
      symbol: coin,
      price: data[coin].usd,
      timestamp: new Date(),
    }));
    await Price.insertMany(prices);
  } catch (error) {
    console.error(error);
  }
};

const startFetchingData = () => {
  fetchData();
  setInterval(fetchData, 5000);  // Poll every 5 seconds
};

module.exports = { startFetchingData };

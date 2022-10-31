const apiKey1 = '2977e6b09826487ba912c11ee68503de';
// eslint-disable-next-line no-unused-vars
const apiKey2 = '3609c0ae002848bd830f34ec06ff3e4d';
const BASE_KEY = apiKey1;
const Url = {
  MockApi: 'https://mocki.io/v1/853c9ffe-fc49-4394-9b8e-adcb0ffc00b2',
  trendingUrl:
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + BASE_KEY,
  queriedUrl: query =>
    'https://newsapi.org/v2/everything?q=' + query + '&apiKey=' + BASE_KEY,
  categoryUrl: category =>
    'https://newsapi.org/v2/top-headlines?country=in&category=' +
    category +
    '&apiKey=' +
    BASE_KEY,
};

export default Url;

const API_KEY = "72fe6c073d3cf964f1465975dfcf5eae";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
// https://api.themoviedb.org/3/trending/all/week?api_key=72fe6c073d3cf964f1465975dfcf5eae1fea930&language=en-US
// https://api.themoviedb.org/3/discover/movie?api_key=72fe6c073d3cf964f1465975dfcf5eae&with_genres=99`

export default requests;
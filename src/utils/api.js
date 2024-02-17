import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjM2ZjhmZmNkM2QxMTgzZDdkYTEwYzFiZjVjYWFmYSIsInN1YiI6IjY1Yjg5NDMxMzBmNzljMDE2MmE5MGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AOc-XdblssMdaQDMNjxUnYxGQVipTtx7RHtatbMFSmE";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
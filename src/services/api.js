import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '31433732-587fed4cb039ee24c3149a17c';

export const fetchImages = async (searchQuery, searchPage = 1) => {
    const URL = `${BASE_URL}/?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    const response = await axios.get(URL);
    return response.data.hits;
}

export default { fetchImages };
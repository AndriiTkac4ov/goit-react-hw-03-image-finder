import { Component } from 'react';
import PropTypes from 'prop-types';
import { Gallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    state = {
        images: {}
    }

    componentDidMount() {
        const BASE_URL = 'https://pixabay.com/api';
        const API_KEY = '31433732-587fed4cb039ee24c3149a17c';
        const page = 1;
        const perPage = 12;
        const searchQuery = 'forest';

        const URL = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

        fetch(URL)
            .then(response => response.json())
            .then(
                images => this.setState({ images })
            )
    }

    render() {
        return (
            <Gallery>
                Hello!!!
                {/* {hits.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        id={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                    />
                ))} */}
            </Gallery>
        )
    }
}

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             webformatURL: PropTypes.string.isRequired,
//             largeImageURL: PropTypes.string.isRequired,
//         }).isRequired
//     ).isRequired
// }
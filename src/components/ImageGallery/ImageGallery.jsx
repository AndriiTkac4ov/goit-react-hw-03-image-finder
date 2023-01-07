import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Gallery } from "./ImageGallery.styled";
import { Loader } from "../Loader/Loader";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    state = {
        images: null,
        isLoading: false,
    }

    async componentDidMount() {
        const BASE_URL = 'https://pixabay.com/api';
        const API_KEY = '31433732-587fed4cb039ee24c3149a17c';
        const page = 1;
        const perPage = 12;
        const searchQuery = 'forest';

        const URL = `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

        this.setState({ isLoading: true });

        try {
            const { data } = await axios.get(URL);
            this.setState({ images: data });
        } catch (error) {
            console.log(error)
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { isLoading, images } = this.state;

        return (
            <>
                {isLoading && <Loader />}
                <Gallery>
                    {images?.hits.map((image) => (
                        <ImageGalleryItem
                            key={image.id}
                            image={image}
                        />
                    ))}
                </Gallery>
            </>
        )
    }
}

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//         }).isRequired
//     ).isRequired
// }
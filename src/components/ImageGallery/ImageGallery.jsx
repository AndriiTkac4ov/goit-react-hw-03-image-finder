import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Gallery } from "./ImageGallery.styled";
import { Loader } from "../Loader/Loader";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";

export class ImageGallery extends Component {
    state = {
        images: null,
        isLoading: false,
        page: 1,
        perPage: 12,
        // error: null, //if we use fetch
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const BASE_URL = 'https://pixabay.com/api';
    //     const API_KEY = '31433732-587fed4cb039ee24c3149a17c';
    //     const page = 1;
    //     const perPage = 12;
        
    //     const prevQueryImages = prevProps.queryImages;
    //     const nextQueryImages = this.props.queryImages;

    //     const URL = `${BASE_URL}/?q=${nextQueryImages}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    //     if (prevQueryImages !== nextQueryImages) {
    //         this.setState({ isLoading: true, images: null });

    //         fetch(URL)
    //             .then(responce => {
    //                 if (responce.ok) {
    //                     return responce.json();
    //                 }
                
    //                 return Promise.reject(
    //                     new Error(`There aren't images by query ${nextQueryImages}`)
    //                 );
    //             })
    //             .then(data => this.setState({ images: data }))
    //             .catch(error => this.setState({ error }))
    //             .finally (() => this.setState({ isLoading: false }));
    //     }
    // }

    async componentDidUpdate(prevProps, prevState) {
        const BASE_URL = 'https://pixabay.com/api';
        const API_KEY = '31433732-587fed4cb039ee24c3149a17c';
        const page = this.state.page;
        const perPage = this.state.perPage;
        
        const prevQueryImages = prevProps.queryImages;
        const nextQueryImages = this.props.queryImages;
        const prevQueryPage = prevState.page;
        const nextQueryPage = this.state.page;

        const URL = `${BASE_URL}/?q=${nextQueryImages}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

        if (prevQueryImages !== nextQueryImages) {
            this.setState({ isLoading: true, images: null, page: 1 });

            try {
                const { data } = await axios.get(URL);
                this.setState({ images: data });
            } catch (error) {
                console.log(error)
            } finally {
                this.setState({ isLoading: false });
            }
        }

        if (prevQueryPage !== nextQueryPage) {
            this.setState({ isLoading: true, images: null });

            try {
                const { data } = await axios.get(URL);
                this.setState({ images: data });
            } catch (error) {
                console.log(error)
            } finally {
                this.setState({ isLoading: false });
            }
        }
    }

    catchWrongQuery = () => {
        toast.info("There aren't images by this query.", {position: "top-left"})
    }

    handleLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
    }

    render() {
        const { isLoading, images } = this.state;

        return (
            <>
                {/* {this.state.error && <h2>{this.state.error.message}</h2>} */}
                {isLoading && <Loader />}
                {images?.hits.length === 0 && this.catchWrongQuery()}
                <Gallery>
                    {images?.hits.map((image) => (
                        <ImageGalleryItem
                            key={image.id}
                            image={image}
                        />
                    ))}
                </Gallery>
                <Button onClickLoadMore={this.handleLoadMore} />
            </>
        )
    }
}

ImageGallery.propTypes = {
    images: PropTypes.shape({
        hits: PropTypes.arrayOf({
            id: PropTypes.number.isRequired,
        }).isRequired,
        total: PropTypes.number.isRequired,
        totalHits: PropTypes.number.isRequired
    })
}
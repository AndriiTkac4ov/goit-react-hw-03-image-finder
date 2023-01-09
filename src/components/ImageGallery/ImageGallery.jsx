import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { Gallery } from "./ImageGallery.styled";
import { Loader } from "../Loader/Loader";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";

export class ImageGallery extends Component {
    state = {
        images: [],
        page: 1,
        isLoading: false,
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
        const prevQueryImages = prevProps.queryImages;
        const nextQueryImages = this.props.queryImages;

        const prevQueryPage = prevState.page;
        const nextQueryPage = this.state.page;

        if (prevQueryImages !== nextQueryImages) {
            this.setState({ isLoading: true, images: [], page: 1 });

            try {
                if (this.state.page === 1) {
                    const images = await api.fetchImages(nextQueryImages, nextQueryPage);
                    this.setState({ images });
                }
            } catch (error) {
                console.log(error)
            } finally {
                this.setState({ isLoading: false });
            }
        }

        if (prevQueryPage !== nextQueryPage) {
            this.setState({ isLoading: true });

            try {
                const images = await api.fetchImages(nextQueryImages, nextQueryPage);
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                }));
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
        const { images, isLoading } = this.state;

        return (
            <>
                {/* {this.state.error && <h2>{this.state.error.message}</h2>} */}
                {isLoading && <Loader />}
                {/* {images?.length === 0 && this.catchWrongQuery()} */}
                <Gallery>
                    {images?.map((image) => (
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
    images: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
    })
}
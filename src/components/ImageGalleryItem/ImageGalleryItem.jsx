import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItem_image } from "./ImageGalleryItem.styled";
import { Modal } from "../Modal/Modal";

const showModal = false;

export class ImageGalleryItem extends Component {
    render() {
        const { image: { webformatURL, largeImageURL, tags } } = this.props;

        return (
            <>
                <GalleryItem>
                    <GalleryItem_image src={webformatURL} alt={tags} />
                </GalleryItem>
                {showModal && <Modal
                    largeImageURL={largeImageURL}
                    tags={tags}
                />}
            </>
        )
    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired
}
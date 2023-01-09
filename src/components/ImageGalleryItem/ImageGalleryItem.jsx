import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItem_image } from "./ImageGalleryItem.styled";
import { Modal } from "../Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    render() {
        const { image: { webformatURL, largeImageURL, tags } } = this.props;
        const { showModal } = this.state;

        return (
            <>
                <GalleryItem onClick={this.toggleModal}>
                    <GalleryItem_image src={webformatURL} alt={tags} />
                </GalleryItem>
                {showModal && <Modal
                    largeImageURL={largeImageURL}
                    tags={tags}
                    onCloseModal={this.toggleModal}
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